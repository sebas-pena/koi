import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const Menu = (props: SvgProps) => (
	<Svg width={24} height={24} fill="none" {...props}>
		<Path
			d="M2 5.995c0-.55.446-.995.995-.995h8.01a.995.995 0 0 1 0 1.99h-8.01A.995.995 0 0 1 2 5.995ZM2 12c0-.55.446-.995.995-.995h18.01a.995.995 0 1 1 0 1.99H2.995A.995.995 0 0 1 2 12ZM2.995 17.01a.995.995 0 0 0 0 1.99h12.01a.995.995 0 0 0 0-1.99H2.995Z"
			fill="#000"
		/>
	</Svg>
)

export default Menu
