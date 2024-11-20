import { ContainerCard, TituloCard, IconCard, ContainerCardOPen } from "../../styled/Card.js";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const CardOpen = ({ tituloCard, active , text}) => {
    const fecharCard = () => {
        active(false)
    }
    return (
        <ContainerCardOPen card={active}>
            <IoIosArrowDown className="svg-fechar" onClick={fecharCard} />
            <p>Neurodivergente é um termo que se refere a pessoas que têm um funcionamento cerebral diferente do padrão considerado normal, ou seja, neurotípico.</p>
        </ContainerCardOPen>
    )
}

export default CardOpen;