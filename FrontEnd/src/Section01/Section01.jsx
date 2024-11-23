import Formulario from "../Components/Formulario/Formulario.jsx";
import { SectionLogin, ImgSection,Logo} from "../styled/Section01.js";
import img01 from "../public/img01.png"
import logoCadAcel from "../public/Logo.png"
const Section01 = ({FormTitulo}) => {
    return(
        <>
        <Logo src={logoCadAcel} alt="Logo do site" />
        <SectionLogin>
            <ImgSection src={img01} alt="Ilustração com um cadeirante e um mulher deficiênte física" />
            <Formulario FormTitulo="Login"/>
        </SectionLogin>
        </>
    )
}

export default Section01;