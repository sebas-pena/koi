import React, { useEffect } from "react"
import {
	Image,
	ImageSourcePropType,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native"
import StyledText from "../StyledText"

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: "row",
		paddingHorizontal: 15,
		marginLeft: 16,
		alignItems: "center",
		borderRadius: 10,
		height: 36,
	},
	filterImg: {
		width: 20,
		height: 20,
		marginRight: 10,
	},
})

type Props = {
	name: string
	source?: ImageSourcePropType
	onPress: (value: string) => void
	state: string
	value: string
	hihglightColor: string
}

const FilterItem = ({
	onPress,
	name,
	source,
	value,
	state,
	hihglightColor,
}: Props) => {
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				onPress(value)
			}}
		>
			<View
				style={[
					styles.wrapper,
					{ backgroundColor: value === state ? hihglightColor : "#cfd0d3" },
				]}
			>
				{source && <Image style={styles.filterImg} source={source} />}
				<StyledText size={16} color="#fff">
					{name}
				</StyledText>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default FilterItem
