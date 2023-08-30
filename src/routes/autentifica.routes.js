import { Router } from "express";
import { sign_In, sign_Out, sign_Up } from "../controllers/autentificaControllers.js";
import { validateSchema } from "../middlewares/validacao.middlewares.js";
import { loginSchema, userSchema } from "../schemas/autentificaSchema.js";
import { validaSessao } from "../middlewares/sessao.middleware.js";


const autentificaRouter = Router()

autentificaRouter.post("/sign-up", validateSchema(userSchema), sign_Up)
autentificaRouter.post("/sign-in",validateSchema(loginSchema), sign_In)
autentificaRouter.post("/logout", validaSessao,sign_Out)

export default autentificaRouter