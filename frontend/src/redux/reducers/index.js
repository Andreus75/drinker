import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { restorationReducer } from "./restorationReduser";

export default combineReducers({
    userReducer,
    restorationReducer
});
