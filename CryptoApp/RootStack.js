import HomeScreen from "./containers/HomeScreen";
import ConnectionsScreen from "./containers/ConnectionsScreen";
import { createStackNavigator } from "react-navigation";

const RootStack = createStackNavigator(
	{
		Home: {
			screen: HomeScreen
		},
		Connections: {
			screen: ConnectionsScreen
		}
	},
	{
		initialRouteName: "Home",
		navigationOptions: {
			headerStyle: {
				backgroundColor: "#0F52BA",
				borderBottomWidth: 0
			},
			headerTintColor: "#fff"
		}
	}
);

export default RootStack;
