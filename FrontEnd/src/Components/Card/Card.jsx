import { ContainerCard, TituloCard, IconCard } from "../../styled/Card.js";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CardOpen from "./CardOpen.jsx";
const Card = ({tituloCard, iconCard})=>{
    const [card, setcard] = useState(false)

    const abrirCard = () =>{ 
        setcard(!card)
    
     }
    return(
      <ContainerCard>
        <IconCard src={iconCard} alt="Icone de cérebro" />
        <TituloCard>{tituloCard}</TituloCard>
        <IoIosArrowDown className="svg-abrir" onClick={abrirCard} />
        {card && <CardOpen active={setcard} />}
      </ContainerCard>
    )
}

export default Card;