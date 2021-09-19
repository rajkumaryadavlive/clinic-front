import { combineReducers } from "redux";
import authReducer from "./authReducer";
const rootReducer = combineReducers({
    loggedIn:authReducer,
})

export default rootReducer;