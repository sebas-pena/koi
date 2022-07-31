import React from "react"
import {
	NavigationContainerRefWithCurrent,
	useNavigation,
} from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native"
import Stack from "./Stack"

import CalendarIcon from "./svg/CalendarIcon"
import HomeIcon from "./svg/HomeIcon"
import TeamIcon from "./svg/TeamIcon"
import ShoppingBagIcon from "./svg/ShoppingBagIcon"
import News from "./svg/News"
import { RootStackParamList } from "../Navigation/types"

const highLightColor = "#4a92f3"
const baseColor = "#fff"
const backgroundColor = "#050914"

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		flex: 1,
	},
	iconWrapper: {
		marginTop: 15,
		width: 24,
		paddingBottom: 8,
		borderBottomWidth: 1,
		height: 30,
		alignItems: "center",
	},
})
const NavBar = ({ actualRoute }): JSX.Element => {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>()

	return (
		<Stack
			horizontal
			backgroundColor={backgroundColor}
			height="4rem"
			justifyContent="space-evenly"
		>
			<TouchableWithoutFeedback
				onPress={(): void => navigation.navigate("News")}
				style={styles.button}
			>
				<View
					style={[
						styles.iconWrapper,
						{
							borderBottomColor:
								actualRoute == "News" ? highLightColor : backgroundColor,
						},
					]}
				>
					<News
						height="20"
						width="20"
						fill={actualRoute == "News" ? highLightColor : baseColor}
					/>
				</View>
			</TouchableWithoutFeedback>

			<TouchableWithoutFeedback
				onPress={(): void => navigation.navigate("Schedule")}
			>
				<View
					style={[
						styles.iconWrapper,
						{
							borderBottomColor:
								actualRoute == "Schedule" ? highLightColor : backgroundColor,
						},
					]}
				>
					<CalendarIcon
						height="20"
						width="20"
						fill={actualRoute == "Schedule" ? highLightColor : baseColor}
					/>
				</View>
			</TouchableWithoutFeedback>

			<TouchableWithoutFeedback
				onPress={(): void => navigation.navigate("Home")}
			>
				<View
					style={[
						styles.iconWrapper,
						{
							borderBottomColor:
								actualRoute == "Home" ? highLightColor : backgroundColor,
							paddingTop: 1,
						},
					]}
				>
					<HomeIcon
						height="19"
						width="19"
						fill={actualRoute == "Home" ? highLightColor : baseColor}
					/>
				</View>
			</TouchableWithoutFeedback>

			<TouchableWithoutFeedback
				onPress={(): void => navigation.navigate("Rosters")}
			>
				<View
					style={[
						styles.iconWrapper,
						{
							borderBottomColor:
								actualRoute == "Rosters" ? highLightColor : backgroundColor,
							paddingBottom: 1,
						},
					]}
				>
					<TeamIcon
						height="23"
						width="23"
						fill={actualRoute == "Rosters" ? highLightColor : baseColor}
					/>
				</View>
			</TouchableWithoutFeedback>

			<TouchableWithoutFeedback
				onPress={(): void => navigation.navigate("Shop")}
			>
				<View
					style={[
						styles.iconWrapper,
						{
							borderBottomColor:
								actualRoute == "Shop" ? highLightColor : backgroundColor,
							paddingTop: 1,
						},
					]}
				>
					<ShoppingBagIcon
						height="20"
						width="20"
						fill={actualRoute == "Shop" ? highLightColor : baseColor}
					/>
				</View>
			</TouchableWithoutFeedback>
		</Stack>
	)
}

export default NavBar
