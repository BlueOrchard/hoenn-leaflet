import { createSlice } from '@reduxjs/toolkit'

export const appDataSlice = createSlice({
    name: 'appData',
    initialState: {
        sidebarState: false
    },
    reducers: {
        toggleSidebar: state => {
            state.sidebarState = !state.sidebarState
        },
        setSidebarState: (state, payload) => {
            state.sidebarState = payload.payload
        }
    }
})

export const { toggleSidebar, setSidebarState } = appDataSlice.actions

export default appDataSlice.reducer