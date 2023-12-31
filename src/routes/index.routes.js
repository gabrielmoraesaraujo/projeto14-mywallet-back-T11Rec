import { Router } from "express"
import autentificaRouter from "./autentifica.routes.js"
import transacaoRouter from "./transacao.routes.js"


const router = Router ()

router.use(autentificaRouter)
router.use(transacaoRouter)

export default router