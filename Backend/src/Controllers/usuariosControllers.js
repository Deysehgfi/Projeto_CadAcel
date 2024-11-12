import Usuario from '../Models/usuariosModels.js'
import conn from "../Config/Conn.js"
import { z } from 'zod'
import formatZodError from '../Helpers/zodError.js'
import bcrypt from 'bcrypt'
import createUserToken from '../Helpers/create-user-token.js'


const createShema = z.object({
    nome: z.string().min(3, { message: "O usuário deve ter pelo menos 3 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    senha: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" })
})

export const criarUsuario = async (request, response) => {
    const bodyValidation = createShema.safeParse(request.body)
    if (!bodyValidation.success) {
        response.status(400).json({ error: formatZodError(bodyValidation.error) });
        return
    }

    const { nome, email, senha, telefone,deficiencia, dataNascimento } = request.body
    const papel = request.body.papel || "user";

    const salt = bcrypt.genSaltSync(12);
    const senhaCrypt = bcrypt.hashSync(senha, salt);

   const  novoUsuario = {
        nome,
        email,
        senha: senhaCrypt,
        telefone,
        deficiencia, 
        dataNascimento,
        papel,
    };

    try {
        const verificaEmail = await Usuario.findOne({ where: { email } });
        if (verificaEmail) {
            return response.status(401).json({ err: "Email está em uso!" })
        }
        await Usuario.create(novoUsuario);
        const selecionaNovoUsuario = await Usuario.findOne({
            where: { email },
            raw: true
        })
        await createUserToken(selecionaNovoUsuario, request, response)

    } catch (error) {
        console.error(error)
        response.status(500).json({ message: "Erro ao cadastrar Usuario" });
    }
}