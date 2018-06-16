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

export default class UserAvatar extends React.Component {
	static propTypes = {
		createPool: PropTypes.func
	};
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.createPool}
					onPress={() => console.warn("create pool")}
				>
					<Ionicon size={64} name="ios-add" color="#fff" />
				</TouchableOpacity>
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
	createPool: {
		width: 145,
		height: 145,
		borderRadius: 72.5,
		backgroundColor: "orange",
		justifyContent: "center",
		alignItems: "center"
	}
});
