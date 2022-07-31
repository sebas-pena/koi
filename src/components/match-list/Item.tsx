import React from "react"
import {
	Image,
	Text,
	TouchableWithoutFeedback,
	View,
	StyleSheet,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import parseTimestamp from "../../helpers/parseTimestamp"
import StyledText from "../StyledText"
import { Match } from "./interface"
import { MatchNavigationProp } from "../../Navigation/types"

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginHorizontal: 16,
		backgroundColor: "#fff",
		borderRadius: 10,
		minHeight: 110,
	},
	teamLogo: {
		aspectRatio: 1,
		width: 100,
	},
	middle: {
		alignItems: "center",
		justifyContent: "space-evenly",
		height: "100%",
	},
})

const Item = ({ local, visitor, timestamp, result, id, league }: Match) => {
	let { day, month, hour, minute } = parseTimestamp(timestamp)
	let date = `${day.number} ${month.name} - ${hour}:${minute}`
	const navigation = useNavigation<MatchNavigationProp>()

	return (
		<TouchableWithoutFeedback
			onPress={() =>
				navigation.navigate("Match", {
					id,
				})
			}
		>
			<View style={styles.wrapper}>
				<Image source={local.image} style={styles.teamLogo} />
				<View style={styles.middle}>
					<StyledText size={16} align="center">
						{league}
					</StyledText>
					<View style={{ flexDirection: "row" }}>
						{result ? (
							<>
								<StyledText size={30} color="#ff7b2d">
									{result.local}
								</StyledText>
								<StyledText
									size={30}
									color="#ff7b2d"
									style={{ marginHorizontal: 5 }}
								>
									-
								</StyledText>
								<StyledText size={30} color="#ff7b2d">
									{result.visitor}
								</StyledText>
							</>
						) : null}
					</View>
					<Text>{date}</Text>
				</View>
				<Image source={visitor.image} style={styles.teamLogo} />
			</View>
		</TouchableWithoutFeedback>
	)
}

export default Item
