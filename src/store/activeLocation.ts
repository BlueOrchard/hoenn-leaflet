import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchIDFromURL } from '../util/fetchIDFromURL'
import apiCalls from './apiCalls'

export const fetchLocationInfo = createAsyncThunk(
    'activeLocation/fetchLocationStatus',
    async (cityTownID: number, {dispatch}) => {
        // Reset activeLocation due to array push in fetchLocationAreas.fulfilled
        dispatch(resetLocationArea())

        // Fetch city/town information
        const response = await apiCalls.fetchLocation(cityTownID)
        
        // Fetch city/town areas - Promise made to ensure consistency
        Promise.all(response.data.areas.map(async (area: any) => {
            let areaID = fetchIDFromURL(area.url)
            const response = await apiCalls.fetchArea(areaID)

            return response.data
        })).then((results: any) => {
            results.forEach((result: object) => {
                dispatch(setLocationAreas(result))
            })
        })

        return response.data
    }
)

type locationState = {
    locationInfo: object,
    locationAreas: object[]
}

const initialState : locationState = {
    locationInfo: {},
    locationAreas: []
}

export const activeLocation = createSlice({
    name: 'activeLocation',
    initialState,
    reducers: {
        resetLocationArea: state => {
            state.locationInfo = {}
            state.locationAreas = []
        },
        setLocationAreas: (state, action: PayloadAction<object>) => {
            state.locationAreas.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchLocationInfo.fulfilled, (state, action: PayloadAction<object>) => {
            state.locationInfo = action.payload
        })
    }
})

export const { resetLocationArea, setLocationAreas } = activeLocation.actions

export default activeLocation.reducer