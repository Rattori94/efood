import styled from "styled-components"
import { facebook, instagram, logo, twitter } from "../../assets"
import { cores } from "../../styles"

const FooterBar = styled.footer`
	background-color: ${cores.bege};
	height: 298px;
	padding-top: 40px;
	text-align: center;
	margin-top: 120px;

	> img {
		width: 125px;
		height: 57.5px;
		display: inline-block;
	}

	@media (max-width: 768px) {
		height: auto;
		padding-bottom: 40px;
		margin-top: 80px;
	}
`

const Redes = styled.div`
	margin: 32px 0 80px;
	display: flex;
	justify-content: center;
	gap: 8px;

	a {
		line-height: 0;
		transition: opacity 0.2s;

		&:hover {
			opacity: 0.7;
		}
	}

	img {
		width: 24px;
		height: 24px;
		display: block;
	}

	@media (max-width: 768px) {
		margin: 32px 0 40px;
	}
`

const Texto = styled.p`
	font-size: 10px;
	line-height: normal;
	color: ${cores.rosa};
	max-width: 480px;
	margin: 0 auto;
	padding: 0 16px;
`

const Footer = () => (
	<FooterBar>
		<img src={logo} alt="efood" />
		<Redes>
			<a href="#" aria-label="Instagram do efood">
				<img src={instagram} alt="" />
			</a>
			<a href="#" aria-label="Facebook do efood">
				<img src={facebook} alt="" />
			</a>
			<a href="#" aria-label="Twitter do efood">
				<img src={twitter} alt="" />
			</a>
		</Redes>
		<Texto>
			A efood é uma plataforma para divulgação de estabelecimentos, a
			responsabilidade pela entrega, qualidade dos produtos é toda do
			estabelecimento contratado.
		</Texto>
	</FooterBar>
)

export default Footer
