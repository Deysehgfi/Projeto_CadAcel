import Usuario from '../Models/usuariosModels.js'
import conn from "../Config/Conn.js"
import { z } from 'zod'
import formatZodError from '../Helpers/zodError.js'
import bcrypt from 'bcrypt'
import createUserToken from '../Helpers/create-user-token.js'
import { response } from 'express'


const createShema = z.object({
    nome: z.string().min(3, { message: "O usuário deve ter pelo menos 3 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    senha: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }), 
    telefone: z.string().regex(/^\+55\s?\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,{message:"Número de telefone inválido"})
})

const loginSchema = z.object({
    email: z.string().email({message: "Email inválido"}), 
    senha: z.string().min(6, {message: "A senha deve conter pelo menos 6 caracteres"})
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

export const login = async( request, response)=>{
    const loginValidation = loginSchema.safeParse(request.body);
    if(!loginValidation.success){
        return response.status(400).json({detalhes: formatZodError(loginValidation.error)});
    }

    const {email, senha} = loginValidation.data; 

    try {
        const usuario = await Usuario.findOne({where:{email}})
        if(!usuario){
        return response.status(404).json({err:"Usuário não encontrado"})
        }
        const comparaSenha = await bcrypt.compare(senha, usuario.senha);
        if(!comparaSenha){
            response.status(401).json({err:"Senha incorreta"})
            return
        }
        await createUserToken(usuario, request, response)
        response.status(200).json(usuario)
    } catch (error) {
        console.log(error)
        response.status(500).json(console.error())
    }
}