import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { useFonts } from "expo-font"

import {
	NavigationContainer,
	DefaultTheme,
	createNavigationContainerRef,
} from "@react-navigation/native"
import Routes from "./src/Navigation/Index"
import NavBar from "./src/components/NavBar"
import Header from "./src/components/Header"

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: "rgb(255, 45, 85)",
		background: "transparent",
	},
}

export default function App() {
	const [loaded] = useFonts({
		Montserrat: require("./src/assets/fonts/Montserrat-Regular.ttf"),
		BebasKai: require("./src/assets/fonts/BebasKai.otf"),
	})

	const [actualRoute, setActualRoute] = useState("Home")
	const handleRouteChange = (state) => {
		setActualRoute(state.routes[state.index].name)
	}

	if (!loaded) {
		return null
	}
	return (
		<View style={styles.container}>
			<NavigationContainer onStateChange={handleRouteChange} theme={MyTheme}>
				<Header actualRoute={actualRoute} />
				<Routes />
				<NavBar actualRoute={actualRoute} />
			</NavigationContainer>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f2f2f2",
		position: "relative",
	},
})
