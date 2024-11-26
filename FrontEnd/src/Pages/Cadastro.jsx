import { useState } from "react";
import axios from "axios"
import Input from "../Components/Input/Input.jsx"
import Botao from "../Components/Botao/Botao.jsx";
import { Form, LinkForm, TituloForm, BOxTitulo, Select, SectionCadastro} from "../styled/Cadastro.js";
import IconEmail from "../public/Email-Icon.svg"
import Person from "../public/Group.svg"
import IconSenha from "../public/Senha.svg"
import Icondata from "../public/DataNasc.svg"
import Iconphone from "../public/Telephone.svg"
import IconAnexo from "../public/Anexo.svg"



const Cadastro = ({ TipoInput, NomeInput, PlaceholderInput, nomeBotao, FormTitulo, NameLabel, IconImg, FuncaoBotao, TipoBotao }) => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")
    const [telefone, setTelefone] = useState("")
    const [deficiencia, setDeficiencia] = useState("")
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null);
    
    const handleCadastro = async (event) => {
        event.preventDefault();
        try {
            await axios.post(
                "http://localhost:3333/usuarios/cadastro",
                JSON.stringify({ nome, email, senha, telefone, deficiencia, dataNascimento}),
                {
                    headers: { "Content-Type": "application/json" }
                },
            );
            setUser(response.data)
            return console.log(response.data)
        } catch (error) {
            if (!error?.response) {
                setError("Erro ao acessar o site");
            } else if (error.response.status === 401) {
                setError("Usuário ou senha inválidos",);
            }
        }
    }
console.log("Usuario ->>>", nome,senha,"<-- nome")


    return (
        <>
        <SectionCadastro>
        <Form onSubmit={handleCadastro}>
            <BOxTitulo>
                <TituloForm>Cadastro</TituloForm>
            </BOxTitulo>
            <Input TipoInput="text" NameLabel="nome" value={nome} IconImg={Person} onChange={(event) => setNome(event.target.value)}/>

            <Input TipoInput="email" NameLabel="email" value={email} IconImg={IconEmail} onChange={(event) => setEmail(event.target.value)}/>

            <Input TipoInput="password" NameLabel="senha" value={senha}  IconImg={IconSenha} onChange={(event) => setSenha(event.target.value)}/>

            <Input TipoInput="data" NameLabel="data de nascimento"IconImg={Icondata} value={dataNascimento} onChange={(event) => setDataNascimento(event.target.value)}/>

            <Input TipoInput="number" NameLabel="telefone" value={telefone} IconImg={Iconphone} onChange={(event) => setTelefone(event.target.value)}/>

            <Select value={deficiencia} onChange={(event) => setDeficiencia(event.target.value)}>
                <option>deficiência</option>
                <option>Visual</option>
                <option>Fisica</option>
                <option>Auditiva</option>
                <option>Neurodivergente</option>
            </Select>
            {error}
            <Botao nomeBotao="Cadastrar" TipoBotao="submit"/>
        </Form>

        </SectionCadastro>
        </>
    )

}


export default Cadastro;