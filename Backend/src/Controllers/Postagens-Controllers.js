import Postagem from '../Models/postagensModels.js'
import conn from "../Config/Conn.js"
import { z } from 'zod'
import formatZodError from '../Helpers/zodError.js'

const createShema = z.object({
    titulo: z.string().min(3, { message: "O Titulo deve ter pelo menos 3 caracteres" }),
    descricao: z.string().min(2 ,{ message: "A senha deve ter pelo menos 2 caracteres" }),
    localizacao: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }), 
})


export const criarPostagens = async (request, response) => {
    const bodyValidation = createShema.safeParse(request.body)
    if (!bodyValidation.success) {
        response.status(400).json({ error: formatZodError(bodyValidation.error) });
        return
    }

    const {titulo, descricao, localizacao} = request.body
 
    const  novaPostagem = {
        titulo, 
        descricao,
         localizacao
    };

    try {
       
        await Postagem.create(novaPostagem);
    response.status(201).json({ message: "Postagem Postado" });
        
    } catch (error) {
        console.error(error)
        response.status(500).json({ message: "Erro ao criar Postagem" });
    }
}


export const getAll = async( request, response) => {
    const page = parseInt(request.query.page) || 1

    const limit = parseInt(request.query.limit) || 10

    const offset = (page - 1) * limit
    try {

        const postagens = await Postagem.findAndCountAll({
            limit,
            offset
        })

        const totalPaginas = Math.ceil(postagens.count / limit)


        response.status(200).json({
            totalPostagens: postagens.count,
            totalPaginas: totalPaginas,
            paginaAtual: page,
            itemsPorPages: limit,
            proximaPag: totalPaginas === 0 ? null : `http://localhost:3333/postagens?page=${page + 1}`,
           Postagens: postagens.rows
        })


    } catch (err) {
        console.error(err)
        response.status(500).json({ message: "Erro ao listar postagens" })
    }
}

