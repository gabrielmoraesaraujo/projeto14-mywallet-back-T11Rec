import { Router } from "express";
import { criarTransacao, lerTransacao } from "../controllers/transacaoControllers.js    ";
import { validateSchema } from "../middlewares/validacao.middlewares.js";
import { validaSessao } from "../middlewares/sessao.middleware.js";
import { transacaoSchema } from "../schemas/transacaoSchema.js";

const transacaoRouter = Router()

transacaoRouter.post("/transacao", validaSessao, validateSchema(transacaoSchema), criarTransacao)
transacaoRouter.get("/transacao", validaSessao,lerTransacao)

export default transacaoRouter