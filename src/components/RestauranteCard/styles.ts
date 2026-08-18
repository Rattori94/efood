import styled from "styled-components"
import { Link } from "react-router-dom"
import { cores } from "../../styles"

export const Card = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100%;
`

export const Capa = styled.img`
	width: 100%;
	height: 217px;
	object-fit: cover;
	display: block;
`

export const Tags = styled.div`
	position: absolute;
	top: 16px;
	right: 16px;
	display: flex;
	gap: 8px;
`

export const Infos = styled.div`
	background-color: ${cores.branco};
	border-left: 1px solid ${cores.rosa};
	border-right: 1px solid ${cores.rosa};
	border-bottom: 1px solid ${cores.rosa};
	padding: 8px;
	min-height: 181px;
	display: flex;
	flex-direction: column;
	flex: 1;
`

export const Titulo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;

	h3,
	span {
		font-size: 18px;
		font-weight: 700;
		color: ${cores.rosa};
	}

	span {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		white-space: nowrap;
	}

	img {
		width: 21px;
		height: 21px;
		display: block;
	}
`

export const Descricao = styled.p`
	margin-top: 16px;
	font-size: 14px;
	line-height: 22px;
	color: ${cores.rosa};
	flex: 1;
`

export const SaibaMais = styled(Link)`
	align-self: flex-start;
	margin-top: 16px;
	background-color: ${cores.rosa};
	color: ${cores.bege};
	font-size: 14px;
	font-weight: 700;
	line-height: 16px;
	padding: 4px 6px;
	transition: background-color 0.2s;

	&:hover {
		background-color: ${cores.rosaEscuro};
	}
`
