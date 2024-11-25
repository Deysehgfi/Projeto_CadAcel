import {BackgroundFooter, IconsSocialMedia,Logo,ContainerLinks,ConteudoFooter, TodosDireitos} from "../styled/Footer.js"

import TelephoneIcon from "../public/Telephone.svg"
import EmailIcon from "../public/Email-Icon.svg"
import { useState } from "react"
import LogoWhite from "../public/LogoWhite.png"
import {FaGithub} from "react-icons/fa"
import GitHub from "../Components/GitHub/GitHub.jsx"


const Footer =  ({active})=>{
    const [git, setGit] = useState(false)

    const abrirgit = () =>{ 
        setGit(!git)
     }

     const handleKeyPress = (evento) => {
      if(evento.key=== "Enter"){
        abrirgit()
      }
     }
    return(
        <BackgroundFooter>
            <ConteudoFooter>
            <Logo src={LogoWhite} alt="Logo versão branca" />
            <ContainerLinks>
                <FaGithub className="svg-abrir" onClick={abrirgit}/>
                {git && <GitHub active={setGit} />}
                <img src={TelephoneIcon} alt="Icone de telefone" />
                <img src={EmailIcon} alt="Icone de Email" />
            </ContainerLinks>
            </ConteudoFooter>
            <TodosDireitos>©Todos os direitos reservados</TodosDireitos>
        </BackgroundFooter>
    )
}

export default Footer;