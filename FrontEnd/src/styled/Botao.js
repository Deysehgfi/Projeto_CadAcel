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

export const Button = styled.button`
color: ${Cores.Branco};
 background-image: linear-gradient(to right,${Cores.AzulClaro}, ${Cores.Ciano}); 
 border: 0;
 border-radius: 15px;
 font-size: 18px;
 box-shadow: 0 4px 4px ${Cores.sombra};
 height: 50px;
 width: 200px;
 cursor: pointer;
 /* &:hover{
   background-color: ${Cores.AzulEscuro};
 } */
`