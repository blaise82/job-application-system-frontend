import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import jobsReducer from "./jobsReducer";

const allReducers = combineReducers({
  login: loginReducer,
  jobs: jobsReducer
});
export default allReducers;
