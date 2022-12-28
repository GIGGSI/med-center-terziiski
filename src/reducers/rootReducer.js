import { combineReducers } from "redux";
import { heightReducer } from './heightReducer'
import { servicesReducer } from './services'

const rootReducer = combineReducers({
    height: heightReducer,
    servicesReducer: servicesReducer
})

export default rootReducer