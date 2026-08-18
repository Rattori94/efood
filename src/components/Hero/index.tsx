import styled from "styled-components"
import { fundo, logo } from "../../assets"
import { breakpoints, cores } from "../../styles"

const HeroBar = styled.div`
	background-image: url(${fundo});
	background-repeat: repeat;
	height: 384px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 64px;

	@media (max-width: ${breakpoints.tablet}) {
		height: auto;
		padding: 40px 16px 48px;
	}
`

const Logo = styled.img`
	width: 125px;
	height: 57.5px;
	display: block;
`

const Chamada = styled.h2`
	margin-top: 138px;
	font-size: 36px;
	font-weight: 900;
	line-height: normal;
	color: ${cores.rosa};
	text-align: center;

	@media (max-width: ${breakpoints.tablet}) {
		margin-top: 48px;
		font-size: 24px;
	}
`

const Hero = () => (
	<HeroBar>
		<Logo src={logo} alt="efood" />
		<Chamada>
			Viva experiências gastronômicas
			<br />
			no conforto da sua casa
		</Chamada>
	</HeroBar>
)

export default Hero
