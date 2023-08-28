import { Router } from "express";
import { autentificaSchema } from "../middlewares/autentificacao.middlewares";
import { autentificaSchema } from "../schemas/autentificaSchema.js"
import { sing_Up } from "../controllers/autentificaControllers";

const autentificaRouter = Router()

autentificaRouter.post("/sing-up", autentificaSchema(autentificaSchema), sing_Up())
autentificaRouter.post("/sing-in")
autentificaRouter.post("/logout")

export default autentificaRouter