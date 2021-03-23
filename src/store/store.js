import {configureStore} from '@reduxjs/toolkit'
import appDataReducer from './appData'

export default configureStore({
    reducer: {
        appData: appDataReducer
    }
})