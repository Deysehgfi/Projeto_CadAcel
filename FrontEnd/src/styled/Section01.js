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

export const SectionLogin = styled.section`
display: flex;
flex-direction: row;
flex-wrap:wrap;
justify-content: center;
align-items: center;

/* @media screen and (max-width:1100px){
  flex-direction: column;
   } */
`
export const ImgSection = styled.img`
height: 710px;
width: 710px;
@media screen and (max-width:680px){
width: 450px;
height: 450px;
   } 
`