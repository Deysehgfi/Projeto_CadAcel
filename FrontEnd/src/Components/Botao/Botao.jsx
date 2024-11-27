import { Button } from "../../styled/Botao.js";

const Botao = ({nomeBotao, FuncaoBotao, IndexBotao, TipoBotao}) => {
    return(
        <>
        <Button type={TipoBotao} tabIndex={IndexBotao} >{nomeBotao}</Button>
        </>
    )
}

export default Botao;