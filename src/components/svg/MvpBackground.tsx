import * as React from "react"
import Svg, {
	SvgProps,
	Path,
	Defs,
	LinearGradient,
	Stop,
} from "react-native-svg"

const MvpBackground = (props: SvgProps) => (
	<Svg {...props}>
		<Path fill="url(#a)" d="M0 0h800v200H0z" />
		<Defs>
			<LinearGradient id="a" gradientUnits="userSpaceOnUse">
				<Stop offset={0} stopColor="#ffeaa0" />
				<Stop offset={0.091} stopColor="#ffe79b" />
				<Stop offset={0.182} stopColor="#fee497" />
				<Stop offset={0.273} stopColor="#fee192" />
				<Stop offset={0.364} stopColor="#fdde8e" />
				<Stop offset={0.455} stopColor="#fddb8a" />
				<Stop offset={0.545} stopColor="#fdd785" />
				<Stop offset={0.636} stopColor="#fdd481" />
				<Stop offset={0.727} stopColor="#fcd17d" />
				<Stop offset={0.818} stopColor="#fcce79" />
				<Stop offset={0.909} stopColor="#fcca75" />
				<Stop offset={1} stopColor="#fcc771" />
			</LinearGradient>
		</Defs>
	</Svg>
)

export default MvpBackground
