import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootStackParamList = {
	Home: undefined
	News: undefined
	Schedule: undefined
	Rosters: undefined
	Shop: undefined
	Match: {
		id: string | number
	}
}
export type MatchNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	"Match"
>
