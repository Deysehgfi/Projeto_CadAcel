import styled from "styled-components"


export const Cores = {
    Ciano: "#84bfc3",
    AzulClaro: "#6e8db9",
    AzulMedio: "#445b86",
    AzulEscuro: "#132c6c",
    Branco: "#ffffff",
    Preto: "#262626",
    cinza: "dddddd",
    sombra:"rgba(0, 0, 0, 0.25)"
}

export const TituloForm = styled.h2`
font-size: 48px;
color: ${Cores.AzulEscuro};
`

export const Form = styled.form`
border-radius: 15px;
padding: 20px;
background-color: ${Cores.Branco};
display: flex;
flex-direction: column;
gap: 10px;
height: 520px;
width: 620px;
`

 
export const LinkForm = styled.h5`

`