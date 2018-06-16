import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
/**
 * Avatar Picture displayed on the HomeScreen
 * The Image is sourced from the main reducer as userAvatar
 * @prop userAvatar a raw image string
 * TODO store the image locally using asyncStorage
 * or any local db easy to use with React-native
 */

export default class UserAvatar extends React.Component {
	static propTypes = {
		userAvatar: PropTypes.number
	};
	render() {
		return (
			<View style={styles.container}>
				<Image source={this.props.userAvatar} style={styles.avatar} />
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
		shadowRadius: 2,
		marginTop: 80
	},
	avatar: {
		width: 70,
		height: 70,
		borderRadius: 35,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2
	}
});
