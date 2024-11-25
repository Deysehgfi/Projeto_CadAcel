import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Input from "../Components/Input/Input.jsx"
import Botao from "../Components/Botao/Botao.jsx";
import { Form, LinkForm, TituloForm, BOxTitulo, Select, SectionCadastro} from "../styled/Cadastro.js";
import IconEmail from "../public/Email-Icon.svg"
import Person from "../public/Group.svg"
import IconSenha from "../public/Senha.svg"
import Icondata from "../public/DataNasc.svg"
import Iconphone from "../public/Telephone.svg"
import IconAnexo from "../public/Anexo.svg"



const Cadastro = ({ TipoInput, NomeInput, PlaceholderInput, nomeBotao, FormTitulo, NameLabel, IconImg, tipoDeUseState, FuncaoBotao }) => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState("")
    const [number, setNumber] = useState("")
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null);
    
    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post(
                "http://localhost:3333/usuarios/cadastro",
                JSON.stringify({ nome, email, password, data, number}),
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
        <>
        <SectionCadastro>
        <Form>
            <BOxTitulo>
                <TituloForm>Cadastro</TituloForm>
            </BOxTitulo>
            <Input TipoInput="text" NameLabel="nome" IconImg={Person} tipoDeUseState={setNome}/>
            <Input TipoInput="email" NameLabel="email"  IconImg={IconEmail} tipoDeUseState={setEmail}/>
            <Input TipoInput="password" NameLabel="senha"  IconImg={IconSenha} tipoDeUseState={setPassword}/>
            <Input TipoInput="data" NameLabel="data de nascimento"IconImg={Icondata} tipoDeUseState={setData}/>
            <Input TipoInput="number" NameLabel="telefone" IconImg={Iconphone} tipoDeUseState={setNumber}/>
            <Select name="" id="">
                <option value="">deficiência</option>
                <option value="">Visual</option>
                <option value="">Fisica</option>
                <option value="">Auditiva</option>
                <option value="">Neurodivergente</option>
            </Select>
            <Input TipoInput="text" NameLabel="anexo do comprovante de deficiência"  IconImg={IconAnexo}/>
            {error}
            <Botao nomeBotao="Cadastrar" onClick={(event) => handleLogin(event)} />
        </Form>

        </SectionCadastro>
        </>
    )

}


export default Cadastro;