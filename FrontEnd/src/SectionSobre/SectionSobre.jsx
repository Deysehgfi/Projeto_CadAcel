import Card from "../Components/Card/Card.jsx";
import Iconbrain from "../public/brain.svg"
import IconOlho from "../public/Olho.svg"
import IconCadeirante from "../public/Cadeirante.svg"
import IconAuditivo from "../public/Auditivo.svg"

import { SobreSection, TituloSection, BoxCards } from "../styled/SectionSobre.js";


const SectionSobre = ({ tituloCard , iconCard }) => {
    return (
        <SobreSection>
            <TituloSection className="animation-scroll">Saiba mais</TituloSection>
            <BoxCards className="animation-scroll">
                <Card tituloCard="Neurodivergente" iconCard={Iconbrain}/>
                <Card tituloCard="Deficiente visual" iconCard={IconOlho} />
                <Card tituloCard="Deficiente físico" iconCard={IconCadeirante}/>
                <Card tituloCard="Deficiente auditivo" iconCard={IconAuditivo} />
            </BoxCards>
        </SobreSection>
    )
}


export default SectionSobre;