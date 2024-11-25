import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Input from "../Input/Input.jsx";
import { Form, LinkForm, TituloForm ,LinkCadastro} from "../../styled/Formulario.js";
import Botao from "../Botao/Botao.jsx";
import emailIcon from "../../public/Email.svg"
import senhaIcon from "../../public/Senha.svg"


const Formulario = ({ TipoInput, NomeInput, PlaceholderInput, nomeBotao, FormTitulo, NameLabel, IconImg, tipoDeUseState, FuncaoBotao, Index, IndexBotao }) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post(
                "http://localhost:3333/usuarios/login",
                JSON.stringify({ email, senha }),
                {
                    headers: { "Content-Type": "application/json" },
                },
            );
            setUser(response.data)
            return console.log(response.data)
        } catch (error) {
            if (!error?.response) {
                setError("Erro ao acessar o site");
            } else if (error.response.status === 401) {
                setError(" Usuário ou senha inválidos",);
            }
        }
    }



    return (
        <div className="ConteinerForm">
            {user === null ? (
                <Form>
                    <TituloForm>{FormTitulo}</TituloForm>
                    <Input NameLabel="Email"
                        Index={1}
                        TipoInput="email"
                        NomeInput="email"
                        IconImg={emailIcon}
                        tipoDeUseState={setEmail}
                    />
                    <Input NameLabel="Senha"
                        Index={2}
                        TipoInput="senha"
                        NomeInput="senha"
                        IconImg={senhaIcon}
                        tipoDeUseState={setSenha}
                    />
                    <p>{error}</p>
                    <LinkForm>Não possui uma conta? <LinkCadastro tabIndex={3} href="/Cadastro">Cadastre-se</LinkCadastro></LinkForm>
                    <Botao IndexBotao={4} FuncaoBotao={handleLogin} nomeBotao="Entrar" />
                </Form>
            ) : (
                <div />
            )}
        </div>
    )
}

export default Formulario;