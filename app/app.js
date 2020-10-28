// @flow

import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import PeopleContainer from "./containers/people-container/people-container";

const store = configureStore({});

const app = () => (
	<Provider store={store}>
		<PeopleContainer />
	</Provider>
);

export default app;
