import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import Touchable from "react-native-platform-touchable";
import Ionicon from "react-native-vector-icons/Ionicons";
/**
 * Avatar Picture displayed on the HomeScreen
 * The Image is sourced from the main reducer as userAvatar
 * @prop userAvatar a raw image string
 * TODO store the image locally using asyncStorage
 * or any local db easy to use with React-native
 */

export default class CryptoExchanges extends React.Component {
	static propTypes = {
		createPool: PropTypes.func
	};
	render() {
		const { priceUSD, priceChange } = this.props.ethExchange;
		return (
			<View style={styles.activityContainer}>
				<Text style={{ color: "white", marginLeft: 20 }}>
					ETH/USD ${priceUSD} ({priceChange}%)
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.3,
		shadowRadius: 2
	},
	activityContainer: {
		backgroundColor: "#0F52BA",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		height: 95,
		alignItems: "center",
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: "#fff"
	}
});
