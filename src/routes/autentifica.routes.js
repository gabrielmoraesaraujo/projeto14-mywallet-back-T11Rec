import { Router } from "express";
import { sing_In, sing_Out, sing_Up } from "../controllers/autentificaControllers.js";

const autentificaRouter = Router()

autentificaRouter.post("/sing-up", sing_Up)
autentificaRouter.post("/sing-in", sing_In)
autentificaRouter.post("/logout", sing_Out)

export default autentificaRouter