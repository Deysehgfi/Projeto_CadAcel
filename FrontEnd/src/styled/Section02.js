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

export const SectionSobre= styled.section`
display: flex;
flex-direction: row;
flex-wrap:wrap;
justify-content: space-around;
align-items: center;
padding: 20px;
padding-top: 70px;
padding-bottom: 70px;

`

export const SobreContainer  = styled.div`
background-color: ${Cores.Branco};
border-radius: 30px 0px 30px 0;
box-shadow: 0 4px 20px ${Cores.sombra};
display: flex;
flex-direction: column;
align-items: center;
gap: 60px;
height: 400px;
width: 550px;
padding: 50px;
@media screen and (max-width:780px){
min-width: 250px;
   } 
`

export const Conteudo = styled.p`
font-family: Arial, Helvetica, sans-serif;
color: ${Cores.AzulEscuro};
text-align: justify;
font-size: 20px;
@media screen and (max-width:680px){
font-size: 18px;
width: 350px;
   } 
`

export const TituloContainer = styled.h2`
font-family: Arial, Helvetica, sans-serif;
color: ${Cores.AzulEscuro};
text-align: center;
font-size: 48px;
`

export const Img = styled.img`
height: 400px;
width: 400px;
filter: drop-shadow(0px 4px 10px ${Cores.sombra});
@media screen and (max-width:680px){
width: 450px;
height: 450px;
   } 
`