import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import NewsScreen from "../screens/NewsScreen"
import HomePage from "../screens/HomeScreen"
import RostersScreen from "../screens/RostersScreen"
import ScheduleScreen from "../screens/ScheduleScreen"
import ShopScreen from "../screens/ShopScreen"
import MatchScreen from "../screens/MatchScreen"
import { RootStackParamList } from "./types"
const Stack = createNativeStackNavigator<RootStackParamList>()

const Routes = () => {
	return (
		<Stack.Navigator
			initialRouteName="Match"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Rosters" component={RostersScreen} />
			<Stack.Screen name="News" component={NewsScreen} />
			<Stack.Screen name="Home" component={HomePage} />
			<Stack.Screen name="Schedule" component={ScheduleScreen} />
			<Stack.Screen name="Shop" component={ShopScreen} />
			<Stack.Screen name="Match" component={MatchScreen} />
		</Stack.Navigator>
	)
}

export default Routes
