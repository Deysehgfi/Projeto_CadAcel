import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Input from "../Input/Input.jsx";
import { Form, LinkForm, TituloForm ,LinkCadastro, Error} from "../../styled/Formulario.js";
import Botao from "../Botao/Botao.jsx";
import emailIcon from "../../public/Email.svg"
import senhaIcon from "../../public/Senha.svg"
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { AiFillExclamationCircle } from "react-icons/ai";

const Formulario = ({ TipoInput, NomeInput, PlaceholderInput, nomeBotao, FormTitulo, NameLabel, IconImg, tipoDeUseState, FuncaoBotao, Index, IndexBotao, TipoBotao}) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);

    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:3333/usuarios/login",
                JSON.stringify({ email, senha }),
                {
                    headers: { "Content-Type": "application/json" },
                },
            );
            setUser(response.data)
            navigate("/HomeAdm")
            // return console.log(response.data)
            
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
                <motion.form onSubmit={handleCriarForm} className="form-styled-login" initial={{ x: 100 }} initial={{ x: 100, opacity: 0 }} animate={{
                    x: 1, x: 0,
                    opacity: 1
                }} transition={{
                    default: { type: "spring" },
                    opacity: { ease: "linear" }, duration: 2
                }}>
                    <BOxTitulo>
                    <TituloForm>Formulário</TituloForm>
                    <h5>Faça sua suestão de melhoria</h5>
                </BOxTitulo>
                <InputFields className="input-fields">
                        <InputStyle type="text" value={titulo} onChange={(event) => setTitulo(event.target.value)} placeholder="" required />
                        <Label> <ImgIcon src={TituloIcon} alt="" className="imgIConEmail" />titulo</Label>
                    </InputFields>
                <Select name="localização" value={localizacao} onChange={(event) => setLocalizacao(event.target.value)} >
                    <option>Localicação</option>
                    <option>Cidade 01</option>
                    <option>Cidade 02</option>
                </Select>
                <InputFields className="input-fields">
                        <InputStyle type="text" value={descricao} onChange={(event) => setDescrica(event.target.value)} placeholder="" required />
                        <Label> <ImgIcon src={DescricaoIcon} alt="" className="imgIConEmail" />descricao</Label>
                    </InputFields>
                    <p>{error}</p>
                <Botao nomeBotao="Criar" TipoBotao="submit"/>
                </motion.form>

            ) : (
                <div />
            )}
        </div>
    )
}

export default Formulario;