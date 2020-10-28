// @flow

import { connect } from "react-redux";
import PeopleComponent from "../../components/people-component/people-component";
import { getPeopleSelector } from "../../reducers/people-reducer";
import { fetchData } from "../../actions/fetch-data/fetch-data";

const mapStateToProps = (state: Object) => getPeopleSelector(state);

const mapDispatchToProps = (dispatch: Function) => ({
	fetchData: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleComponent);
