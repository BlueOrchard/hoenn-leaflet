import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const appDataSlice = createSlice({
    name: 'appData',
    initialState: {
        sidebarState: false
    },
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