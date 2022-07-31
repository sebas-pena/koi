import { ImageSourcePropType } from "react-native"


export type Match = {
	id : string | number,
	local: {
		name: string
		image: ImageSourcePropType
	}
	visitor: {
		name: string
		image: ImageSourcePropType
	}
	timestamp: number
	result?: {
		local: number
		visitor: number
	}
	league: "superliga" | "vrlrising"
}