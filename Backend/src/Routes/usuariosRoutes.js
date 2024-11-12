import {Router} from "express"
import{criarUsuario} from '../Controllers/usuariosControllers.js'

const router = Router()

router.post('/', criarUsuario)

export default router;