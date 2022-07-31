import React from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import ShopItem from "../components/shop-item/ShopItem"

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: "center",
		paddingTop: 10,
	},
	shopLogo: {
		width: 167,
		height: 25,
		marginBottom: 16,
	},
})

const ShopScreen: React.FC = () => {
	return (
		<View style={styles.wrapper}>
			<Image
				style={styles.shopLogo}
				source={require("../assets/images/kelme-logo.png")}
			/>
			<ScrollView style={{ width: "100%" }}>
				<View
					style={{
						width: "100%",
						paddingHorizontal: 16,
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "space-between",
					}}
				>
					<ShopItem />
					<ShopItem />
					<ShopItem />
					<ShopItem />
					<ShopItem />
				</View>
			</ScrollView>
		</View>
	)
}

export default ShopScreen
