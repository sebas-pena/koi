import React from "react"
import { FlatList, View } from "react-native"
import { Match } from "./interface"
import Item from "./item"

type Props = {
	matches: Array<Match>
}
const MatchList = ({ matches }: Props) => {
	return (
		<FlatList
			data={matches}
			renderItem={({ item }) => <Item {...item} />}
			ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
		/>
	)
}

export default MatchList
