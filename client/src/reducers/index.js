import { combineReducers } from "redux";
import rooms from "./roomReducer";

const reducers = combineReducers({
  rooms,
});

export default reducers;
