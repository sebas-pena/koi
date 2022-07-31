import React from "react"
import { Image, View, StyleSheet } from "react-native"
import parseTimestamp from "../helpers/parseTimestamp"
import StyledText from "./StyledText"

const styles = StyleSheet.create({
	teamsWrapper: {
		flexDirection: "row",
		height: 140,
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	logos: {
		height: 120,
		width: 120,
	},
	matchResult: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
})

const MatchResult = ({ local, visitor, result, date }) => {
	const { day, month } = parseTimestamp(date)

	return (
		<View style={styles.teamsWrapper}>
			<Image style={styles.logos} source={{ uri: local.image.uri }} />
			<View style={styles.matchResult}>
				<StyledText size={30} color="#ff2a4f" weight="bold">
					{result.local} - {result.visitor}
				</StyledText>
				<StyledText
					color="#ff2a4f"
					weight="bold"
					style={{ textAlign: "center" }}
				>
					{day.name.slice(0, 3)}. {day.number} {month.name}
				</StyledText>
			</View>
			<Image style={styles.logos} source={{ uri: visitor.image.uri }} />
		</View>
	)
}

export default MatchResult
