import React from "react"
import {
	Image,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native"
import StyledText from "../components/StyledText"

/* 
local: {
			name: "Koi",
			image: {
				uri: "https://static.lvp.global/teams/logos/61b740d6c6264734104767.x2.png",
			},
		},

		visitor: {
			name: "Heretics",
			image: {
				uri: "https://static.lvp.global/teams/logos/61b740d6c6264734104767.x2.png",
			},
 */
const styles = StyleSheet.create({
	wrapper: {},
	nextMatchWrapper: {
		flexDirection: "row",
		marginHorizontal: 16,
		paddingHorizontal: 16,
		backgroundColor: "#fff",
		borderRadius: 8,
		justifyContent: "space-between",
		alignItems: "center",
	},
	image: {
		width: 100,
		height: 100,
	},
	textWrapper: {},
})
const HomePage: React.FC = () => {
	return (
		<View style={styles.wrapper}>
			<View>
				<StyledText style={{ textAlign: "center" }} size={15}>
					Next Match
				</StyledText>
				<TouchableWithoutFeedback>
					<View style={styles.nextMatchWrapper}>
						<Image
							style={styles.image}
							source={{
								uri: "https://static.lvp.global/teams/logos/61b740d6c6264734104767.x2.png",
							}}
						/>
						<View style={styles.textWrapper}>
							<StyledText>24 Jul</StyledText>
							<StyledText>12:00</StyledText>
						</View>
						<Image
							style={styles.image}
							source={{
								uri: "https://static.lvp.global/teams/logos/618bf01ad3d2d198039705.x2.png",
							}}
						/>
					</View>
				</TouchableWithoutFeedback>
			</View>
			<StyledText>"Hello"</StyledText>
		</View>
	)
}

export default HomePage
