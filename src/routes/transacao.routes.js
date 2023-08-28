import { Router } from "express";

const transacaoRouter = Router()

transacaoRouter.post("/transacao")
transacaoRouter.get("/transacao")

export default transacaoRouter