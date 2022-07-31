import React, { useEffect, useState } from "react"
import { View, StyleSheet, ScrollView } from "react-native"
import FilterItem from "../components/league-filter/FilterItem"
import { Match } from "../components/match-list/interface"
import MatchList from "../components/match-list/MatchList"

const styles = StyleSheet.create({
	filterContainer: {
		width: "100%",
		flex: 1,
	},

	wrapper: {
		flex: 1,
	},
})
const filterItems = [
	{
		name: "All",
		value: "all",
		hihglightColor: "#5192ff",
	},
	{
		name: "Superliga",
		source: require("../assets/images/superliga-logo.png"),
		value: "superliga",
		hihglightColor: "#FF5154",
	},
	{
		name: "Vrlrising",
		source: require("../assets/images/vrl-logo.png"),
		value: "vrlrising",
		hihglightColor: "#ffb47f",
	},
]

const matches: Array<Match> = [
	{
		id: 1,
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

		timestamp: 1658551519696,

		result: {
			local: 1,
			visitor: 0,
		},
	},
	{
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

		timestamp: 1658551519696,

		result: {
			local: 1,
			visitor: 0,
		},
	},
	{
		id: 3,

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

		timestamp: 1658551519696,

		result: {
			local: 1,
			visitor: 0,
		},
	},
	{
		id: 4,

		league: "superliga",
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

		timestamp: 1658551519696,

		result: {
			local: 1,
			visitor: 0,
		},
	},
	{
		id: 5,

		league: "superliga",
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

		timestamp: 1658551519696,

		result: {
			local: 1,
			visitor: 0,
		},
	},
	{
		id: 6,

		league: "superliga",
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

		timestamp: 1658551519696,

		result: {
			local: 1,
			visitor: 0,
		},
	},
	{
		id: 7,

		league: "superliga",
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

		timestamp: 1658551519696,

		result: {
			local: 1,
			visitor: 0,
		},
	},
]
const ScheduleScreen: React.FC = () => {
	const [filter, setFilter] = useState("all")

	useEffect(() => {}, [filter])

	return (
		<View style={styles.wrapper}>
			<View style={{ height: 52, marginTop: 6 }}>
				<ScrollView style={styles.filterContainer} horizontal>
					{filterItems.map((item) => (
						<FilterItem
							key={item.value}
							onPress={setFilter}
							{...item}
							state={filter}
						/>
					))}
				</ScrollView>
			</View>
			<MatchList
				matches={matches.filter(
					(match) => filter === "all" || match.league === filter
				)}
			/>
		</View>
	)
}

export default ScheduleScreen
