import styled from "styled-components"


export const Cores = {
    Ciano: "#84bfc3",
    AzulClaro: "#6e8db9",
    AzulMedio: "#445b86",
    AzulEscuro: "#132c6c",
    Branco: "#ffffff",
    Preto: "#262626",
    cinza: "dddddd",
    sombra: "rgba(0, 0, 0, 0.25)"
}

export const ContainerCard = styled.div`
position: relative;
background-color: ${Cores.Branco};
box-shadow: 0 4px 4px ${Cores.sombra};
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
border-radius: 0 20px 0 20px;
height: 110px;
width: 500px;
`
export const ContainerCardOPen = styled.div`
position: absolute;
z-index: 999;
top: 106px;
background-color: ${Cores.Branco};
box-shadow: 0 4px 4px ${Cores.sombra};
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
border-radius: 0 0px 0 20px;
height: 250px;
width: 500px;
`

export const TituloCard = styled.h2`
font-family: Arial, Helvetica, sans-serif;
color: ${Cores.AzulEscuro};
font-size: 30px;
`

export const IconCard = styled.img`
width: 80px;
height: 80px;
`
