import { connect } from "react-redux";
import CryptoExchanges from "../components/CryptoExchanges";

const mapStateToProps = state => {
	return {
		ethExchange: state.main.get("ethExchange").toJS()
	};
};

export default connect(mapStateToProps, null)(CryptoExchanges);
