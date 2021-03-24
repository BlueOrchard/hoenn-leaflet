import {configureStore} from '@reduxjs/toolkit'
import appDataReducer from './appData'
import activeLocationReducer from './activeLocation'

const store = configureStore({
    reducer: {
        appData: appDataReducer,
        activeLocation: activeLocationReducer
    }
})

export type AppDispatch = typeof store.dispatch
export default store