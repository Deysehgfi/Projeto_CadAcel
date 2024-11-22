import { HeaderNav, NavBar, NavLinksBox, NavLinks, IconsNav, IconPerfil, Divisao} from "../styled/Header.js"

import person from "../public/Group.svg"
import question from "../public/question.svg"
import house from "../public/House.svg"
import pencil from "../public/icon-Lapis.svg"


const Header = () => {
    return (
        <>
            <HeaderNav>
                <NavBar>
                <IconPerfil src={person} alt="Icon de perfil"  />
                    <Divisao/>
                    <NavLinksBox>
                        <IconsNav src={house} alt="Icon de casa" />
                        <NavLinks>Home</NavLinks>
                    </NavLinksBox>

                    <NavLinksBox>
                        <IconsNav src={question} alt="Icon de interrogação"/>
                        <NavLinks >Sobre</NavLinks>
                    </NavLinksBox>

                    <NavLinksBox>
                        <IconsNav src={pencil} alt="Icon de Lápis"/>
                        <NavLinks >Criar</NavLinks>
                    </NavLinksBox>
                </NavBar>
            </HeaderNav>
        </>
    )
}

export default Header;