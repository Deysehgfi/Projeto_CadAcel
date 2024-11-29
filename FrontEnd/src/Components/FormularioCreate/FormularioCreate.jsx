
import { InputStyle, InputFields, ImgIcon, Label} from "../../styled/Input.js"

import { Form, TituloForm, SelectFields, LabelSelect} from "../../styled/Formulario.js"
// import { motion } from "framer-motion"
import { Select } from "../../styled/Formulario.js";

import { useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

import Botao from "../Botao/Botao.jsx";
import TituloIcon from "../../public/TituloIcon.svg"
import LocalIcon from "../../public/Icon-localizacao.svg"
import DescricaoIcon from "../../public/descricao.svg"


const FormularioCreate = ({FormTitulo, nomeBotao, TipoBotao})=>{
    const [titulo, setTitulo] = useState("")
    const [localizacao, setLocalizacao] = useState("")
    const [descricao, setDescricao] = useState("")
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null);

    const navigate = useNavigate()


    const handleCriarForm = async (event) => {
        event.preventDefault();
        try {
            await axios.post(
                "http://localhost:3333/postagens/criar",
                JSON.stringify({ titulo, localizacao, descricao }),
                {
                    headers: { "Content-Type": "application/json" }
                },
            );
            setUser(response.data)
            navigate('/HomeAdm')

           
        } catch (error) {
            if (!error.response) {
                setError("Erro ao acessar o site");
            } else if (error.response.status === 401) {
                setError("Error ao criar formulario",);
            }
        }

        console.log("titulo->", titulo)
        console.log("descricao->", descricao)
        console.log("localiacao->", localizacao)
    }

    return(
        <>
        <Form onSubmit={handleCriarForm}>
            <TituloForm>Criar formulário</TituloForm>

            <InputFields className="input-fields">
        <InputStyle value={titulo} type="text" onChange={(event) => setTitulo(event.target.value)} placeholder=""  required/>
        <Label> <ImgIcon src={TituloIcon} alt="" className="imgIConEmail" />Titulo</Label>
        </InputFields>


<SelectFields>
<Select value={localizacao}  onChange={(event) => setLocalizacao(event.target.value)} >
            <option>Cidade 01</option>
            <option>Cidade 02</option>
        </Select>
        <LabelSelect> <ImgIcon src={LocalIcon} alt="" className="imgIConEmail" />Localização</LabelSelect>
</SelectFields>
      
        <InputFields className="input-fields">
        <InputStyle value={descricao} type="text" onChange={(event) => setDescricao(event.target.value)} placeholder=""  required/>
        <Label> <ImgIcon src={DescricaoIcon} alt="" className="imgIConEmail" />Descrição</Label>
        </InputFields>
        <p>{error}</p>
        <Botao nomeBotao="Criar" TipoBotao="submit" />
        </Form>
        </>
    )
}

export default FormularioCreate;