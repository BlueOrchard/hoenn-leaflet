import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type appDataState = {
    sidebarState: boolean
}

const initialState : appDataState = {
    sidebarState: false
}

export const appDataSlice = createSlice({
    name: 'appData',
    initialState,
    reducers: {
        toggleSidebar: state => {
            state.sidebarState = !state.sidebarState
        },
        setSidebarState: (state, action: PayloadAction<boolean>) => {
            state.sidebarState = action.payload
        }
    }
})

export const { toggleSidebar, setSidebarState } = appDataSlice.actions

export default appDataSlice.reducer