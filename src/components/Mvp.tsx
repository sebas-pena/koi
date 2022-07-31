import React from "react"
import { Image, View, StyleSheet } from "react-native"
import StyledText from "./StyledText"
import Medal from "./svg/Medal"
import MvpBackground from "./svg/MvpBackground"

const styles = StyleSheet.create({})
const Mvp = ({ imageUrl, name, nick, kda, champion }) => {
	return (
		<View
			style={{
				alignItems: "center",
				marginTop: 16,
				position: "relative",
				height: 150,
			}}
		>
			<View
				style={{
					overflow: "hidden",
					position: "absolute",
					width: "100%",
					height: "100%",
					borderRadius: 16,
				}}
			>
				<MvpBackground
					style={{
						width: "100%",
						height: "100%",
					}}
				/>
			</View>

			<Medal
				width={40}
				height={40}
				fill="#ff2a4f"
				style={{ position: "absolute", right: 15 }}
			/>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "flex-start",
					width: "100%",
					height: "100%",
				}}
			>
				<Image
					source={{
						uri: imageUrl,
					}}
					style={{
						height: "100%",
						width: undefined,
						aspectRatio: 140 / 196,
					}}
				/>

				<View
					style={{
						flex: 1,
						paddingLeft: 10,
						paddingRight: 30,
						height: "100%",
						justifyContent: "space-evenly",
					}}
				>
					<StyledText size={21} color="#ff2a4f" style={{}}>
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
			</View>
		</View>
	)
}

export default Mvp
