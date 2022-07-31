import React from "react"
import {
	Image,
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Linking,
} from "react-native"
import StyledText from "../StyledText"
import { Dimensions } from "react-native"

let { width } = Dimensions.get("window")
width -= 50
let imageWidth = width > 300 ? width * 0.5 : width
const styles = StyleSheet.create({
	wrapper: {
		width: imageWidth,
		height: imageWidth + 70,
		marginBottom: 16,
		backgroundColor: "#fff",
		borderRadius: 8,
	},
	image: {
		width: imageWidth,
		aspectRatio: 1,
		borderRadius: 8,
	},
	textWrapper: {
		paddingHorizontal: 10,
		flex: 1,
		justifyContent: "space-evenly",
	},
})

const ShopItem = () => {
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Linking.openURL(
					"https://www.kelme.com/es/camiseta-manga-corta/2957-camiseta-koi-squad-2022-negra.html"
				)
			}}
		>
			<View style={styles.wrapper}>
				<Image
					style={styles.image}
					source={require("../../assets/images/koi-tshirt-negra.jpg")}
				/>
				<View style={styles.textWrapper}>
					<StyledText size={16}>Camiseta Koi Negra</StyledText>
					<StyledText size={14} color="#c7c7c7">
						$50
					</StyledText>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default ShopItem
