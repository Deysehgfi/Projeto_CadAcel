import { SectionRElacoes, TituloSection, ContainerCards } from "../styled/SectionRelacoes.js";
import CardMelhorias from "../Components/CardMelhorias/CardMelhorias.jsx";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const SectionRelacoes = ({ nameUser, deficiencia, local, titulopostagem, datapostagem, descricaopostagem }) => {

    const [postagens, setPostagens] = useState([])
    
    useEffect(() => {
        rederizePostagens()
    }, [setPostagens])

    const rederizePostagens = async () => {
        try {
            const response = await axios.get('http://localhost:3333/postagens')
            console.log(response.data.Postagens)
            setPostagens(response.data.Postagens);
    } catch (error) {
        if (!error?.response) {
            setError("Erro ao acessar o site");
        } else if (error.response.status === 401) {
            setError("Campos vazios, preecha os campos");
        }
        }
    }
        
    return (
        <SectionRElacoes>
            <TituloSection>Sugestões e melhorias</TituloSection>
            <ContainerCards>{postagens.map((postagem, index) => (
                 <CardMelhorias 
                 nameUser="Pessoa"
                  deficiencia="Visual"
                   local={postagem.localizacao}
                    titulopostagem={postagem.titulo}
                     datapostagem={postagem.createdAt}
                      descricaopostagem={postagem.descricao} />
                       ))}
           </ContainerCards>
        
        </SectionRElacoes>
    )
}


export default SectionRelacoes;