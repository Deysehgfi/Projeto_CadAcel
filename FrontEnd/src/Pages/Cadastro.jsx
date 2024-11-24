import Input from "../Components/Input/Input.jsx";
import Botao from "../Components/Botao/Botao.jsx";
import { Form, LinkForm, TituloForm, BOxTitulo, Select, SectionCadastro} from "../styled/Cadastro.js";
import IconEmail from "../public/Email-Icon.svg"
import Person from "../public/Group.svg"
import IconSenha from "../public/Senha.svg"
import Icondata from "../public/DataNasc.svg"
import Iconphone from "../public/Telephone.svg"
import IconAnexo from "../public/Anexo.svg"



const Cadastro = ({ TipoInput, NomeInput, PlaceholderInput, nomeBotao, FormTitulo, NameLabel, IconImg, tipoDeUseState, FuncaoBotao }) => {
    return (
        <SectionCadastro>
        <Form>
            <BOxTitulo>
                <TituloForm>Cadastro</TituloForm>
            </BOxTitulo>
            <Input TipoInput="text" NameLabel="nome" IconImg={Person}/>
            <Input TipoInput="email" NameLabel="email"  IconImg={IconEmail} />
            <Input TipoInput="password" NameLabel="senha"  IconImg={IconSenha} />
            <Input TipoInput="data" NameLabel="data de nascimento"IconImg={Icondata} />
            <Input TipoInput="number" NameLabel="telefone" IconImg={Iconphone} />
            <Select name="" id="">
                <option value="">deficiência</option>
                <option value="">Visual</option>
                <option value="">Fisica</option>
                <option value="">Auditiva</option>
                <option value="">Neurodivergente</option>
            </Select>
            <Input TipoInput="text" NameLabel="anexo do comprovante de deficiência"  IconImg={IconAnexo}/>
            <Botao nomeBotao="Cadastrar" />
        </Form>

        </SectionCadastro>
    )

}


export default Cadastro;