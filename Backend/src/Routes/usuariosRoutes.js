import {Router} from "express"
import{criarUsuario, login} from '../Controllers/usuariosControllers.js'

const router = Router()

router.post('/', criarUsuario)
router.post('/login', login)

export default router;