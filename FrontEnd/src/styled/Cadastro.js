import styled from "styled-components";

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

export const SectionCadastro = styled.section`
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;
margin-bottom: 100px;
`
export const TituloForm = styled.h2`
font-size: 40px;
padding: 20px;
color: ${Cores.AzulEscuro};
`

export const Form = styled.form`
border-radius: 15px;
padding: 25px 35px;
background-color: ${Cores.Branco};
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
min-width: 450px;
height: 700px;
box-shadow: 0 4px 10px ${Cores.sombra};
@media screen and (max-width:680px){
min-width: 300px;
   } 
`

 
export const LinkForm = styled.h5`
color: ${Cores.AzulEscuro};
font-weight: 400;
font-size: 15px;
`

export const BOxTitulo = styled.div`
text-align: center;
gap: 10px;
`

export const LinkCadastro = styled.a`
font-family: Arial, Helvetica, sans-serif;
color: ${Cores.AzulEscuro};
font-weight:bold;
`

export const Select = styled.select`
    width: 105%;
    outline: 1.4px solid black;
    border: none;
    border-radius:  8px;
    padding: 13px 25px;
    font-size: 18px;
`