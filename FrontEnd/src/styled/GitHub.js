import styled from "styled-components"


export const Cores = {
    Ciano: "#84bfc3",
    AzulClaro: "#6e8db9",
    AzulMedio: "#445b86",
    AzulEscuro: "#132c6c",
    Branco: "#ffffff",
    Preto: "#262626",
    cinza: "dddddd",
    sombra:"rgba(0, 0, 0, 0.25)",
    vermelhoError: '#cc1818'
}



export const BackgroundGit = styled.div`
position: fixed;
background-color: ${Cores.Preto};
width: 100vw;
height: 100vh;
z-index: 999999;
opacity: 50%;
`


export const ContainerGit = styled.div`
position: fixed;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 600px;
z-index: 9999999;
height: 500px;
background-color: ${Cores.Branco};
`