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
        
        // Fetch city/town areas
        response.data.areas.map((area: any) => {
            let areaID = fetchIDFromURL(area.url)
            dispatch(fetchLocationAreas(areaID))
        })

        return response.data
    }
)

// Not exported since this will be exclusively called in fetchLocationInfo
const fetchLocationAreas = createAsyncThunk(
    'activeLocation/fetchLocationAreas',
    async (areaID: number) => {
        const response = await apiCalls.fetchArea(areaID)

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
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchLocationInfo.fulfilled, (state, action: PayloadAction<object>) => {
            state.locationInfo = action.payload
        })
        builder.addCase(fetchLocationAreas.fulfilled, (state, action: PayloadAction<object>) => {
            state.locationAreas.push(action.payload)
        })
    }
})

export const { resetLocationArea } = activeLocation.actions

export default activeLocation.reducer