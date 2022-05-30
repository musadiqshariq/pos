import {combineReducers} from "redux";

import {Login_Reducer} from "./auth/authReducer";

const rootReducer = combineReducers(
    {
        Login_Reducer,
    }
)

export default rootReducer;