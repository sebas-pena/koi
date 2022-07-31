import React from "react"
import { ColorValue, Text, TextStyle } from "react-native"
type Props = {
	children: React.ReactNode
	color?: "primary" | "secondary" | ColorValue
	size?: "small" | "medium" | "large" | number
	weight?: "light" | "regular" | "bold"
	align?: "left" | "center" | "right"
	style?: TextStyle
}
const styles = {
	small: { fontSize: "0.8rem" },
	medium: { fontSize: "1rem" },
	large: { fontSize: "1.2rem" },
	light: { fontWeight: "light" },
	regular: { fontWeight: "regular" },
	bold: { fontWeight: "bold" },
	primary: {
		color: "#aa4586",
	},
	secondary: {
		color: "#ff00a8",
	},
	left: { textAlign: "left" },
	center: { textAlign: "center" },
	right: { textAlign: "right" },
}

const StyledText = ({ children, color, size, weight, align, style }: Props) => {
	return (
		<Text
			adjustsFontSizeToFit
			style={[
				{
					fontFamily: "Montserrat",
				},
				(size && styles[size]) || { fontSize: size },
				weight && styles[weight],
				(color && styles[color]) || { color },
				align && styles[align],
				style,
			]}
		>
			{children}
		</Text>
	)
}

export default StyledText
