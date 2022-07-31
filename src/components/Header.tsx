import React from "react"
import StyledText from "./StyledText"
import Notification from "./svg/Notification"
import Menu from "./svg/Menu"
import Stack from "./Stack"

const Header = ({ actualRoute }) => {
	return (
		<Stack
			horizontal
			justifyContent="space-between"
			height={50}
			alignItems={"center"}
			paddingHorizontal={16}
		>
			<Menu width={24} height={24} fill="#050910" />
			<StyledText weight="regular" size="medium">
				{actualRoute}
			</StyledText>
			<Notification width={24} height={24} fill="#050910" />
		</Stack>
	)
}

export default Header
