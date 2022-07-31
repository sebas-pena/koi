import React from "react"
import { View, Image } from "react-native"
import StyledText from "../StyledText"
import Item from "./Item"

const PlayersStats = ({ team, squad }) => {
	return (
		<>
			<StyledText
				size={19}
				color="#444444"
				style={{
					textAlign: "center",
					marginTop: 16,
				}}
			>
				{team}
			</StyledText>
			<View
				style={{
					marginTop: 16,
					backgroundColor: "#fff",
					borderRadius: 16,
				}}
			>
				{squad.map((player, index) => (
					<Item key={index} {...player} />
				))}
			</View>
		</>
	)
}

export default PlayersStats
