import React from "react"
import { StyleSheet, View } from "react-native"
import StyledText from "./StyledText"

const styles = StyleSheet.create({
	matchStats: { alignItems: "center", width: "100%" },
	matchStatWrapper: {
		alignItems: "center",
		width: "100%",
		paddingBottom: 10,
		backgroundColor: "#fff",
	},
	statsValuesWrapper: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		paddingBottom: 10,
	},
	statBar: {
		flexDirection: "row",
		height: 7,
		width: "50%",
		marginHorizontal: 10,
		backgroundColor: "#e7e7e7",
	},
})
const MatchStats = ({ stat }) => {
	return (
		<View style={styles.matchStatWrapper}>
			<StyledText size={20} color="#444444" weight="regular">
				{stat.title}
			</StyledText>
			<View style={styles.statsValuesWrapper}>
				<View
					style={{
						flex: 1,
						alignItems: "flex-end",
					}}
				>
					<StyledText size={20} color="#ff2a4f" weight="bold">
						{stat.local / 1000 > 1 ? `${stat.local / 1000}k` : stat.local}
					</StyledText>
				</View>
				<View style={styles.statBar}>
					<View
						style={{
							width: "50%",
							alignItems: "flex-end",
						}}
					>
						<View
							style={{
								width: `${(stat.local * 100) / (stat.local + stat.visitor)}%`,
								height: "100%",
								backgroundColor: "#ff2a4f",
							}}
						></View>
					</View>
					<View
						style={{
							width: "50%",
							alignItems: "flex-start",
						}}
					>
						<View
							style={{
								width: `${(stat.visitor * 100) / (stat.local + stat.visitor)}%`,

								height: "100%",
								backgroundColor: "#2a44ff",
							}}
						></View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
						alignItems: "flex-start",
					}}
				>
					<StyledText size={20} color="#ff2a4f" weight="bold">
						{stat.visitor / 1000 > 1 ? `${stat.visitor / 1000}k` : stat.visitor}
					</StyledText>
				</View>
			</View>
		</View>
	)
}

export default MatchStats
