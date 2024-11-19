

const Formulario = ({ TipoInput, NomeInput, PlaceholderInput, nomeBotao, FormTitulo, NameLabel, IconImg, tipoDeUseState, FuncaoBotao }) => {
    return (
                <Form>
                    <TituloForm>{FormTitulo}</TituloForm>
                    <Input NameLabel="Email"
                        TipoInput="email"
                        NomeInput="email"
                        IconImg={emailIcon}
                        tipoDeUseState={setEmail}
                    />
                    <Input NameLabel="Senha"
                        TipoInput="senha"
                        NomeInput="senha"
                        IconImg={senhaIcon}
                        tipoDeUseState={setSenha}
                    />
                    <p>{error}</p>
                    <LinkForm>Não possui uma conta? <a href="">Cadastre-se</a></LinkForm>
                    <Botao FuncaoBotao={handleLogin} nomeBotao="Entrar" />
                </Form>
    
    )
}

export default Formulario;