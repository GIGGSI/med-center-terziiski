import { combineReducers } from "redux";
import { heightReducer } from './heightReducer'

const rootReducer = combineReducers({
    height: heightReducer
})

export default rootReducer