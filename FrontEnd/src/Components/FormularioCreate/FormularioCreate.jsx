
import Input from "../Input/Input.jsx";
import { Form, LinkForm, TituloForm, BOxTitulo } from "../../styled/Formulario.js";
import Botao from "../Botao/Botao.jsx";
import TituloIcon from "../../public/TituloIcon.svg"
import LocalIcon from "../../public/Icon-localizacao.svg"
import DescricaoIcon from "../../public/descricao.svg"




const FormularioCreate = ({ TipoInput, NomeInput, PlaceholderInput, nomeBotao, FormTitulo, NameLabel, IconImg, tipoDeUseState, FuncaoBotao }) => {

    return (
        <>
            <Form>
                <BOxTitulo>
                    <TituloForm>Formulário</TituloForm>
                    <h5>Faça sua suestão de melhoria</h5>
                </BOxTitulo>
                <Input TipoInput="text"
                    NameLabel="Título" IconImg={TituloIcon} />
                <Input TipoInput="select"
                    NameLabel="Localização" IconImg={LocalIcon} />
                <Input TipoInput="text"
                    NameLabel="descricao" IconImg={DescricaoIcon} />

                <Botao nomeBotao="Enviar" />
            </Form>
        </>
    )
}

export default FormularioCreate;