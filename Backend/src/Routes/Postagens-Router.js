import {Router} from "express"
import { criarPostagens,getAll } from "../Controllers/Postagens-Controllers.js";

const router = Router()

router.post("/criar", criarPostagens )
router.get("/", getAll )

export default router;