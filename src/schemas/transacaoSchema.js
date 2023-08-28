import joi from 'joi'

export const transacaoSchema = joi.object({
    valor:joi.number().positive().required(),
    descricao:joi.string().required(),
    tipo: joi.string().required()//.valid("income","expense")
})
