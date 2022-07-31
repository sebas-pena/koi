import React from "react"
import {
	View,
	ViewStyle,
	FlexAlignType,
	ColorValue,
	OpaqueColorValue,
} from "react-native"

type Props = {
	children: React.ReactNode | React.ReactNode[]
	alignItems?: FlexAlignType
	justifyContent?:
		| "flex-start"
		| "flex-end"
		| "center"
		| "space-between"
		| "space-around"
		| "space-evenly"
	flexWrap?: "wrap" | "nowrap" | "wrap-reverse"
	backgroundColor?: ColorValue | OpaqueColorValue
	horizontal?: boolean
	height: number | string
	paddingHorizontal?: number
	style?: any
}

const Stack = ({
	children,
	alignItems,
	justifyContent,
	flexWrap,
	backgroundColor,
	horizontal,
	height,
	paddingHorizontal,
	style,
}: Props) => {
	const container: ViewStyle = {
		height,
		width: "100%",
		flexWrap,
		backgroundColor,
		flexDirection: horizontal ? "row" : "column",
		alignItems,
		justifyContent,
		paddingHorizontal,
	}

	return <View style={[container, style]}>{children}</View>
}

export default Stack
