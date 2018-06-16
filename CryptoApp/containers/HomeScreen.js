import { connect } from "react-redux";
import HomeScreen from "../components/HomeScreen";
import { setUpDefault } from "../actions/setUpDefault";

const mapStateToProps = state => {
	const searchParam = state.main.get("searchParam");
	return {
		trustScore: state.main.get("trustScore"),
		name: state.main.get("name"),
		connections: state.main
			.get("allConnections")
			.filter(
				item =>
					item
						.get("firstName")
						.toLowerCase()
						.replace(/\s/g, "")
						.includes(searchParam.toLowerCase().replace(/\s/g, "")) ||
					item
						.get("lastName")
						.toLowerCase()
						.replace(/\s/g, "")
						.includes(searchParam.toLowerCase().replace(/\s/g, ""))
			)
			.toJS()
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setUpDefault: () => {
			dispatch(setUpDefault());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
