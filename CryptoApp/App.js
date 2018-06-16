import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import RootStack from "./RootStack";
import store from "./store";
import { setUpDefault } from "./actions/setUpDefault";

/**
 * App flow:
 * Sign in
 * List of pools with a create pool button
 * The pool will be a list of people
 * You can set the price, and see the total
 * If you click in the middle / top will be a simple qrcode screen
 * the qrcode will contain an address and wager payment amount
 * if someone scans the qrcode and transfers money into the account
 * a screen will pop up showing that a payment was made
 * with the amount of money they are transferring
 * there is a manditory field for indicating who this person is
 * if you accept and enter their name
 * the money is transferred to your local account
 * and then into ethereum
 * you input the person's name betting after they scan
 * there should also be a manual way to account for cash
 * after a person is entered, either through a qrcode or manually
 * you can update their account with a crypto address
 * the app should optionally connect to facebook to help find friends
 */

export default class App extends React.Component {
	componentWillMount() {
		// initialize the state of the application with dummy data
		store.dispatch(setUpDefault());
	}
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<RootStack />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
