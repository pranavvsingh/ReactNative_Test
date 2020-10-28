// @flow
import { combineReducers } from "redux";
import peopleReducer from "./people-reducer";

// Root Reducer
const rootReducer = combineReducers({
	people: peopleReducer,
});

export default rootReducer;
