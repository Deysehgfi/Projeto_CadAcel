import Formulario from "../Components/Formulario/Formulario.jsx";
import { SectionLogin, ImgSection} from "../styled/Section01.js";
import img01 from "../public/img01.png"
const Section01 = ({FormTitulo}) => {
    return(
        <SectionLogin>
            <ImgSection src={img01} alt="" />
            <Formulario FormTitulo="Login"/>

        </SectionLogin>
    )
}

export default Section01;