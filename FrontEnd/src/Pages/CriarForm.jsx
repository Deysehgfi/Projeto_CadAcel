import Header from "../Header/Header.jsx";
import { SectionCriarForm } from "../styled/CriarForm.js";
import Formulario from "../Components/Formulario/Formulario.jsx"

const CriarForm = ({FormTitulo})=>{
    return(
        <>
        <Header/>
<SectionCriarForm>
<Formulario FormTitulo="Criar Formulário"/>
</SectionCriarForm>
</>
    )
}

export default CriarForm;