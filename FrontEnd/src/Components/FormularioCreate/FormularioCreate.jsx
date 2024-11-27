
import { Form, LinkForm, TituloForm, BOxTitulo, Select } from "../../styled/Formulario.js";
import { InputStyle, InputFields, Label, ImgIcon } from "../../styled/Input.js"
import Botao from "../Botao/Botao.jsx";
import TituloIcon from "../../public/TituloIcon.svg"
import LocalIcon from "../../public/Icon-localizacao.svg"
import DescricaoIcon from "../../public/descricao.svg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const FormularioCreate = ({ TipoInput, NomeInput, PlaceholderInput, nomeBotao, FormTitulo, NameLabel, IconImg, tipoDeUseState, FuncaoBotao }) => {
    const [titulo, setTitulo] = useState("")
    const [localizacao, setLocalizacao] = useState("")
    const [descricao, setDescrica] = useState("")
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
            if (error?.response) {
                setError("Erro ao acessar o site");
            } else if (error.response.status === 401) {
                setError("Error ao criar formulario",);
            }
        }

        console.log("titulo->", titulo)
        console.log("descricao->", descricao)
        console.log("localiacao->", localizacao)
    }

    return (
        <>
            <Form onSubmit={handleCriarForm}>
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
                <Botao nomeBotao="Criar" TipoBotao="submit" />
            </Form>
        </>
    )
}

export default FormularioCreate;