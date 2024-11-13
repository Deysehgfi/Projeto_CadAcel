import Input from "../Input/Input.jsx";
import { Form, LinkForm, TituloForm } from "../../styled/Formulario.js";
import Botao from "../Botao/Botao.jsx";
import emailIcon from "../../public/Email.svg"
import senhaIcon from "../../public/Senha.svg"
const Formulario = ({ TipoInput, NomeInput, PlaceholderInput, nomeBotao, FormTitulo, NameLabel, IconImg}) => {
    return (
        <Form>
            <TituloForm>{FormTitulo}</TituloForm>
            <Input NameLabel="Email" IconImg={emailIcon}/>
            <Input NameLabel="Senha" IconImg={senhaIcon}/>
            <LinkForm>Não possui uma conta? <a href="">Cadastre-se</a></LinkForm>
            <Botao nomeBotao="Entrar" />
        </Form>
    )
}

export default Formulario;