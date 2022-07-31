import React from "react"
import { Image, ScrollView, StyleSheet, View } from "react-native"
import { useRoute } from "@react-navigation/native"
import StyledText from "../components/StyledText"
import MatchStats from "../components/MatchStats"
import PickBan from "../components/PickBan"
import Mvp from "../components/Mvp"
import PlayersStats from "../components/players-stats/PlayersStats"
import MatchResult from "../components/MatchResult"
const match = {
	id: 2,

	league: "vrlrising",
	local: {
		name: "Koi",
		image: {
			uri: "https://static.lvp.global/teams/logos/61b740d6c6264734104767.x2.png",
		},
	},

	visitor: {
		name: "Heretics",
		image: {
			uri: "https://static.lvp.global/teams/logos/618bf01ad3d2d198039705.x2.png",
		},
	},

	date: 1658551519696,

	result: {
		local: 1,
		visitor: 0,
	},
	stats: [
		{
			local: 15,
			visitor: 10,
			title: "Kills",
		},
		{
			local: 52100,
			visitor: 40200,
			title: "Gold",
		},
		{
			local: 5,
			visitor: 3,
			title: "Towers",
		},
		{
			local: 2,
			visitor: 1,
			title: "Inhibitors",
		},
		{
			local: 5,
			visitor: 3,
			title: "Dragons",
		},
		{
			local: 1,
			visitor: 0,
			title: "Barons",
		},
	],
	picks: {
		local: ["Graves", "MonkeyKing", "Vex", "Tristana", "Nautilus"],
		visitor: ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu"],
	},
	bans: {
		local: ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu"],
		visitor: ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu"],
	},
	mvp: {
		imageUrl:
			"https://static.lvp.global/players/photos/628de8910c952601545255.x2.png",
		name: "Francisco Cruz",
		nick: "Xico",
		kda: "5/0/4 - 9 KDA",
		champion: "Azir",
		role: "Mid",
	},
	squads: {
		local: [
			{
				imageUrl:
					"https://static.lvp.global/players/photos/628b4c3975699735020201.x2.png",
				nick: "Whiteknight",
				name: "Matti Sormunen",
				kda: "1/2/3 - 2 KDA",
				champion: "Vex",
			},
			{
				imageUrl:
					"https://static.lvp.global/players/photos/628b4c3975699735020201.x2.png",
				nick: "Whiteknight",
				name: "Matti Sormunen",
				kda: "1/2/3 - 2 KDA",
				champion: "Vex",
			},
			{
				imageUrl:
					"https://static.lvp.global/players/photos/628b4c3975699735020201.x2.png",
				nick: "Whiteknight",
				name: "Matti Sormunen",
				kda: "1/2/3 - 2 KDA",
				champion: "Vex",
			},
			{
				imageUrl:
					"https://static.lvp.global/players/photos/628b4c3975699735020201.x2.png",
				nick: "Whiteknight",
				name: "Matti Sormunen",
				kda: "1/2/3 - 2 KDA",
				champion: "Vex",
			},
			{
				imageUrl:
					"https://static.lvp.global/players/photos/628b4c3975699735020201.x2.png",
				nick: "Whiteknight",
				name: "Matti Sormunen",
				kda: "1/2/3 - 2 KDA",
				champion: "Vex",
			},
		],
		visitor: [
			{
				imageUrl:
					"https://static.lvp.global/players/photos/628b45baeb0e3029420387.x2.png",
				nick: "Whiteknight",
				name: "Matti Sormunen",
				kda: "1/2/3 - 2 KDA",
				champion: "Viego",
			},
			{
				imageUrl:
					"https://static.lvp.global/players/photos/628b45baeb0e3029420387.x2.png",
				nick: "Whiteknight",
				name: "Matti Sormunen",
				kda: "1/2/3 - 2 KDA",
				champion: "Viego",
			},
			{
				imageUrl:
					"https://static.lvp.global/players/photos/628b45baeb0e3029420387.x2.png",
				nick: "Whiteknight",
				name: "Matti Sormunen",
				kda: "1/2/3 - 2 KDA",
				champion: "Viego",
			},
			{
				imageUrl:
					"https://static.lvp.global/players/photos/628b45baeb0e3029420387.x2.png",
				nick: "Whiteknight",
				name: "Matti Sormunen",
				kda: "1/2/3 - 2 KDA",
				champion: "Viego",
			},
			{
				imageUrl:
					"https://static.lvp.global/players/photos/628b45baeb0e3029420387.x2.png",
				nick: "Whiteknight",
				name: "Matti Sormunen",
				kda: "1/2/3 - 2 KDA",
				champion: "Viego",
			},
		],
	},
}
const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		position: "relative",
		paddingBottom: 20,
	},
	backgroundWrapper: {
		position: "absolute",
		height: 232,
		width: "100%",
		paddingHorizontal: 16,
	},
	contentWrapper: {
		position: "relative",
		zIndex: 1,
		marginTop: 54,
		marginHorizontal: 30,
	},
})
const MatchScreen = () => {
	const params = useRoute().params as { id: string | number }
	const id = params ? params?.id : 1
	return (
		<ScrollView style={styles.wrapper}>
			<View style={styles.backgroundWrapper}>
				<View
					style={{
						backgroundColor: "#dd3aff",
						height: 200,
						borderRadius: 16,
						position: "relative",
						overflow: "hidden",
					}}
				>
					<Image
						source={require("../assets/images/superliga-logo.png")}
						style={{
							width: 190,
							height: 190,
							position: "absolute",
							right: -30,
							opacity: 0.5,
							top: -10,
						}}
					/>
				</View>
			</View>

			<View style={styles.contentWrapper}>
				<View
					style={{
						backgroundColor: "#fff",
						borderRadius: 16,
						overflow: "hidden",
					}}
				>
					<MatchResult
						local={match.local}
						visitor={match.visitor}
						date={match.date}
						result={match.result}
					/>

					<View style={{ alignItems: "center", width: "100%" }}>
						{match.stats.map((stat, index) => (
							<MatchStats key={index} stat={stat} />
						))}
					</View>
				</View>
				<PickBan
					team={match.local.name}
					picks={match.picks.local}
					bans={match.bans.local}
				/>

				<PickBan
					team={match.visitor.name}
					picks={match.picks.visitor}
					bans={match.bans.visitor}
				/>

				<Mvp {...match.mvp} />
				<StyledText
					size={19}
					color="#444444"
					style={{
						textAlign: "center",
						marginTop: 16,
					}}
				>
					Players Stats
				</StyledText>
				<PlayersStats team={match.local.name} squad={match.squads.local} />
				<PlayersStats team={match.visitor.name} squad={match.squads.visitor} />
			</View>
		</ScrollView>
	)
}

export default MatchScreen
