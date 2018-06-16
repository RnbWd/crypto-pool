import { connect } from "react-redux";
import CreatePoolButton from "../components/CreatePoolButton";

const mapStateToProps = state => {
	return {
		userAvatar: state.main.get("userAvatar")
	};
};

export default connect(mapStateToProps, null)(CreatePoolButton);
