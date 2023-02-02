import history from "./history";
import maps from "./maps.js"
import { combineReducers } from "redux";

const rootReducer = combineReducers({ history, maps });

export default rootReducer;
