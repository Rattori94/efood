import { createGlobalStyle } from "styled-components"

export const cores = {
	rosa: "#E66767",
	rosaEscuro: "#D45252",
	bege: "#FFEBD9",
	fundo: "#FFF8F2",
	branco: "#FFFFFF",
	cinza: "#4B4B4B",
	erro: "#B3261E",
	erroFundo: "#FBE3E1",
}

export const breakpoints = {
	desktop: "1024px",
	tablet: "768px",
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.rosa};
  }

  body.hide-scroll {
    overflow: hidden;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1100px) {
      max-width: 90%;
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  :focus-visible {
    outline: 2px solid ${cores.rosa};
    outline-offset: 2px;
  }
`
