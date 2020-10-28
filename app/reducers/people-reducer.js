// @flow

import { FETCH_DATA_ERROR, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "../constants/action-types";

const initialState = {
  peopleInfo: {},
  isLoading: false,
  error: false,
};

export const getPeopleSelector = (state: Object) => ({ ...state.people });

const peopleReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        peopleInfo: action.payload.peopleInfo,
      };
    }
    case FETCH_DATA_REQUEST: {
      return {
        isLoading: true,
        error: false,
        peopleInfo: {},
      };
    }
    case FETCH_DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default peopleReducer;
