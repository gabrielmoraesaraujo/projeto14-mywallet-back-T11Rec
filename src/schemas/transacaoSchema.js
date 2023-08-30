import joi from 'joi'

export const transacaoSchema = joi.object({
    valor:joi.number().precision(2).positive().required(),
    descricao:joi.string().required(),
    tipo: joi.string().required().valid("income","expense")
})
