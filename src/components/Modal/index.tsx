import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { close as iconeFechar } from "../../assets"
import { add } from "../../store/reducers/cart"
import { formataPreco } from "../../utils"
import type { Prato } from "../../types"
import * as S from "./styles"

type Props = {
	prato: Prato
	onClose: () => void
}

const Modal = ({ prato, onClose }: Props) => {
	const dispatch = useDispatch()

	useEffect(() => {
		const aoTeclar = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose()
		}
		document.addEventListener("keydown", aoTeclar)
		return () => document.removeEventListener("keydown", aoTeclar)
	}, [onClose])

	useEffect(() => {
		document.body.classList.add("hide-scroll")
		return () => document.body.classList.remove("hide-scroll")
	}, [])

	const adicionar = () => {
		dispatch(add(prato))
		onClose()
	}

	return (
		<>
			<S.Overlay />
			<S.Container
				role="dialog"
				aria-modal="true"
				aria-label={prato.nome}
				onClick={onClose}
			>
				<S.Conteudo onClick={(e) => e.stopPropagation()}>
					<S.Fechar onClick={onClose} aria-label="Fechar">
						<img src={iconeFechar} alt="" />
					</S.Fechar>
					<S.Foto src={prato.foto} alt={prato.nome} />
					<S.Infos>
						<h3>{prato.nome}</h3>
						<p>{prato.descricao}</p>
						<p>Serve: {prato.porcao}</p>
						<button onClick={adicionar}>
							Adicionar ao carrinho - {formataPreco(prato.preco)}
						</button>
					</S.Infos>
				</S.Conteudo>
			</S.Container>
		</>
	)
}

export default Modal
