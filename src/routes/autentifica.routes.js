import { Router } from "express";

const autentificaRouter = Router()

autentificaRouter.post("/sing-up")
autentificaRouter.post("/sing-in", (req, res) =>{ res.send("Ta funfando")})
autentificaRouter.post("/logout")

export default autentificaRouter