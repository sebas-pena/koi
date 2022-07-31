import React from "react"
import { View, Image } from "react-native"
import StyledText from "../StyledText"

const Item = ({ nick, name, champion, kda, imageUrl }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				borderBottomWidth: 1,
				borderColor: "#e6e6e6",
				height: 150,
				paddingLeft: 16,
			}}
		>
			<View
				style={{
					justifyContent: "space-evenly",
					height: 150,
					paddingVertical: 10,
				}}
			>
				<StyledText size={17} color="#444444">
					{nick}
				</StyledText>
				<StyledText size={17} color="#444444">
					{name}
				</StyledText>
				<StyledText size={17} color="#444444">
					{champion}
				</StyledText>
				<StyledText size={17} color="#444444">
					{kda}
				</StyledText>
			</View>
			<View
				style={{
					height: "100%",
				}}
			>
				<Image
					source={{
						uri: imageUrl,
					}}
					style={{
						height: 150,
						width: undefined,
						aspectRatio: 250 / 355,
					}}
				/>
			</View>
		</View>
	)
}

export default Item
