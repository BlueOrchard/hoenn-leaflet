import {configureStore} from '@reduxjs/toolkit'
import appDataReducer from './appData.ts'

export default configureStore({
    reducer: {
        appData: appDataReducer
    }
})