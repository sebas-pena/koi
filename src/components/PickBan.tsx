import React from "react"
import { Image, View, StyleSheet } from "react-native"
import StyledText from "./StyledText"

const styles = StyleSheet.create({
	pickWrapper: {
		alignItems: "center",
		backgroundColor: "#fff",
		borderRadius: 16,
		marginTop: 16,
		paddingVertical: 15,
	},
	picks: {
		flexDirection: "row",
		paddingLeft: 10,
		marginTop: 10,
		position: "relative",
	},

	pickImg: {
		height: 40,
		width: 40,
		marginRight: 10,
	},
	banImg: {
		height: 30,
		width: 30,
		opacity: 0.65,
	},
})
const PickBan = ({ team, picks, bans }) => {
	return (
		<View style={styles.pickWrapper}>
			<StyledText size={19} color="#444444">
				{team}
			</StyledText>
			<View style={styles.picks}>
				{picks.map((pick, index) => (
					<Image
						key={index}
						style={styles.pickImg}
						source={{
							uri: `https://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${pick}.png`,
						}}
					></Image>
				))}
			</View>
			<View style={styles.picks}>
				{bans.map((pick, index) => (
					<View
						style={{
							backgroundColor: "#f00",
							marginRight: 10,
						}}
					>
						<Image
							key={index}
							style={styles.banImg}
							source={{
								uri: `https://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${pick}.png`,
							}}
						/>
					</View>
				))}
			</View>
		</View>
	)
}

export default PickBan
