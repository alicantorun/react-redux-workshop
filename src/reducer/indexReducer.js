import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { weatherReducer } from "./weatherReducer";

export default combineReducers({
  dataReducer: dataReducer,
  weatherReducer: weatherReducer
});
