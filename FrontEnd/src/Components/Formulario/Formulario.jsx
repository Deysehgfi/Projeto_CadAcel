import Input from "../Input/Input.jsx";
import { Form, LinkForm, TituloForm } from "../../styled/Formulario.js";
import Botao from "../Botao/Botao.jsx";
const Formulario = ({ TipoInput, NomeInput, PlaceholderInput, nomeBotao, FormTitulo }) => {
    return (
        <Form>
            <TituloForm>{FormTitulo}</TituloForm>
            <Input/>
            <LinkForm>Não possui uma conta? <a href="">Cadastre-se</a></LinkForm>
            <Botao nomeBotao="Entrar" />
        </Form>
    )
}

export default Formulario;