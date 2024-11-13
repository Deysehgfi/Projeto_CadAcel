import { Button } from "../../styled/Botao.js";

const Botao = ({nomeBotao, FuncaoBotao}) => {
    return(
        <>
        <Button onClick={(event) => FuncaoBotao(event)}>{nomeBotao}</Button>
        </>
    )
}

export default Botao;