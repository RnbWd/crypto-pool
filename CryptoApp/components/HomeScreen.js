import React from "react";
import {
	FlatList,
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
	ScrollView
} from "react-native";
import PropTypes from "prop-types";
import HeaderButtons from "react-navigation-header-buttons";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomNav from "./BottomNav";
import UserAvatar from "../containers/UserAvatar";
import SearchConnections from "../containers/SearchConnections";
import ConnectionCard from "../containers/ConnectionCard";
import Ionicon from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import CryptoExchanges from "../containers/CryptoExchanges";
import ExistingPools from "./ExistingPools";
/**
 * Home screen of BrightID
 */

export default class HomeScreen extends React.Component {
	static propTypes = {
		trustScore: PropTypes.string,
		connectionsCount: PropTypes.number,
		groupsCount: PropTypes.number,
		name: PropTypes.string
	};

	static navigationOptions = {};
	_keyExtractor = (item, index) => item.firstName + item.lastName + item.id;
	render() {
		return (
			<View style={styles.container}>
				<ScrollView contentStyleContainer={styles.scrollContainer}>
					<View style={styles.headerBottom}>
						<View style={styles.logo} />
					</View>
					<View style={styles.mainTop} />
					<CryptoExchanges />
					<View style={styles.createPoolContainer}>
						<TouchableOpacity style={styles.createPool}>
							<Entypo size={64} name="drop" color="orange" />
						</TouchableOpacity>
						<Text style={{ color: "grey", marginTop: 12 }}>Create Pool</Text>
					</View>
					<View style={styles.existingPoolsContainer}>
						<Text style={{ marginTop: 10 }}>Manage Existing Pools</Text>
						<ExistingPools />
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0F52BA"
		// backgroundColor: "#03ffd2"
		// alignItems: "center",
		// flexDirection: "column",
		// justifyContent: "flex-start"
	},
	scrollContainer: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "flex-start",
		backgroundColor: "#03ffd2"
	},
	headerBottom: {
		backgroundColor: "#0F52BA",
		width: "100%",
		height: 130,
		justifyContent: "center",
		alignItems: "center"
	},
	createPoolContainer: {
		width: "100%",
		height: 250,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#03ffd2"
	},
	createPool: {
		backgroundColor: "#fff",
		width: 180,
		borderRadius: 90,
		height: 180,
		justifyContent: "center",
		alignItems: "center"
	},
	existingPoolsContainer: {
		backgroundColor: "#03ffd2",
		flex: 1,
		width: "100%",
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: "grey"
	},
	logo: {
		width: 228,
		flex: 1,
		backgroundColor: "orange",
		borderBottomLeftRadius: 118,
		borderBottomRightRadius: 118,
		justifyContent: "center",
		alignItems: "center"
	},
	trustScoreContainer: {
		borderBottomColor: "#333",
		borderBottomWidth: StyleSheet.hairlineWidth,
		width: "90%",
		paddingTop: 7,
		paddingBottom: 7
	},

	mainTop: {
		height: 40,
		backgroundColor: "#0F52BA",
		width: "100%"
	},
	counts: {
		justifyContent: "space-evenly",
		flexDirection: "row",
		width: "80%",
		paddingTop: 16,
		paddingBottom: 16
	},
	countsText: {
		textAlign: "center",
		fontSize: 18
	},

	connectContainer: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ccc",
		height: 200
	},
	connectText: {
		fontSize: 12
	}
});
