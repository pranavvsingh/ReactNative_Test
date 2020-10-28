// @flow

import config from "../lib/config";

export const fetchPeopleName = () =>
	fetch(config.API_URL)
		.then(function (response) {
			return response.json();
		})
		.then(function (parsedJson) {
			return parsedJson.results;
		})
		.catch((err) => err);
