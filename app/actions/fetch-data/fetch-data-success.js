// @flow

import { FETCH_DATA_SUCCESS } from "../../constants/action-types";

export const fetchDataSuccess = (peopleInfo: Object) => ({
	type: FETCH_DATA_SUCCESS,
	payload: { peopleInfo },
});
