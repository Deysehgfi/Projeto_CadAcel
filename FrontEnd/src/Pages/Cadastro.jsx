// import { useState } from "react";
// import axios from "axios"
// import Input from "../Components/Input/Input.jsx"
// import Botao from "../Components/Botao/Botao.jsx";
// import { Form, LinkForm, TituloForm, BOxTitulo, Select, SectionCadastro } from "../styled/Cadastro.js";
// import { InputStyle, InputFields, Label, ImgIcon } from "../styled/Input.js"
// import { LinkForm, TituloForm, BOxTitulo, Select, SectionCadastro, SelectFields, Label, ImgIcon, LinkCadastro, SubTituloForm, Option } from "../styled/Cadastro.js";
// import IconEmail from "../public/Email-Icon.svg"
// import Person from "../public/Group.svg"
// import IconSenha from "../public/Senha.svg"
// import Icondata from "../public/DataNasc.svg"
// import Iconphone from "../public/Telephone.svg"
// import IconAnexo from "../public/Anexo.svg"
// import IconPrancheta from "../public/Prancheta.svg"
// import { motion } from "framer-motion"
import { useState } from "react"

const Cadastro = ({FuncaoBotao, TipoBotao }) => {

    return(
<h1>ola</h1>
    )
}


export default Cadastro;
// const Cadastro = ({ TipoInput, NomeInput, PlaceholderInput, nomeBotao, FormTitulo, NameLabel, valorinput, IconImg, FuncaoBotao, TipoBotao }) => {
//     const [nome, setNome] = useState("")
//     const [email, setEmail] = useState("")
//     const [senha, setSenha] = useState("")
//     const [dataNascimento, setDataNascimento] = useState("")
//     const [telefone, setTelefone] = useState("")
//     const [deficiencia, setDeficiencia] = useState("")
//     const [error, setError] = useState(null)
//     const [user, setUser] = useState(null);

//     const handleCadastro = async (event) => {
//         event.preventDefault();
//         try {
//             await axios.post(
//                 "http://localhost:3333/usuarios/cadastro",
//                 JSON.stringify({ nome, email, senha, telefone, deficiencia, dataNascimento }),
//                 {
//                     headers: { "Content-Type": "application/json" }
//                 },
//             );
//             setUser(response.data)
//             return console.log(response.data)
//         } catch (error) {
//             if (!error?.response) {
//                 setError("Erro ao acessar o site");
//             } else if (error.response.status === 401) {
//                 setError("Usuário ou senha inválidos",);
//             }
//         }

//         console.log("NOme ->", nome)
//         console.log("senha->", senha)
//         console.log("data->", dataNascimento)
//         console.log("email->", email)
//         console.log("telefone->", telefone)
//         console.log("deficiencia->", deficiencia)
//     }


//     return (
//         <>
//             <SectionCadastro>
//                 <motion.form className="form-design" initial={{ x: 100, opacity: 0 }} animate={{
//                 x: 1, x: 0,
//                 opacity: 1
//             }} transition={{
//                 default: { type: "spring" },
//                 opacity: { ease: "linear" }, duration: 2
//             }}   onSubmit={handleCadastro}>
//                     <BOxTitulo>
//                         <TituloForm>Cadastro</TituloForm>
//                     </BOxTitulo>

//                     <InputFields className="input-fields">
//                         <InputStyle type="text" value={nome} onChange={(event) => setNome(event.target.value)} placeholder="" required />
//                         <Label> <ImgIcon src={Person} alt="" className="imgIConEmail" />nome</Label>
//                     </InputFields>


//                     <InputFields className="input-fields">
//                         <InputStyle type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="" required />
//                         <Label> <ImgIcon src={IconEmail} alt="" className="imgIConEmail" />email</Label>
//                     </InputFields>

//                     <InputFields className="input-fields">
//                         <InputStyle type="password" value={senha} onChange={(event) => setSenha(event.target.value)} placeholder="" required />
//                         <Label> <ImgIcon src={IconSenha} alt="" className="imgIConEmail" />senha</Label>
//                     </InputFields>


//                     <InputFields className="input-fields">
//                         <InputStyle type="date" value={dataNascimento} onChange={(event) => setDataNascimento(event.target.value)} placeholder="" required />
//                         <Label> <ImgIcon src={Icondata} alt="" className="imgIConEmail" />data de nascimento</Label>
//                     </InputFields>


//                     <InputFields className="input-fields">
//                         <InputStyle type="number" value={telefone} onChange={(event) => setTelefone(event.target.value)} placeholder="" required />
//                         <Label> <ImgIcon src={Iconphone} alt="" className="imgIConEmail"/>telefone</Label>
//                     </InputFields>

//                     <Select value={deficiencia} onChange={(event) => setDeficiencia(event.target.value)}>
//                         <option>deficiência</option>
//                         <option>Visual</option>
//                         <option>Fisica</option>
//                         <option>Auditiva</option>
//                         <option>Neurodivergente</option>
//                     </Select>
//                     <p>{error}</p>
//                     <Botao nomeBotao="Cadastrar" TipoBotao="submit" />
//                 </motion.form>
//             </SectionCadastro>
//         </>
//     )

// }


// export default Cadastro;