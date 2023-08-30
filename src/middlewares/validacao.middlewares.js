

export function validateSchema(schema){ 
    return (req, res, next) => {

        const validacao = schema.validate(req.body, { abortEarly: false})

        if(validacao.error){
            const errors = validacao.error.details.map(detail =>  detail.message)
            console.log(req.body)
            return res.status(422).send(errors)
        } 
        next()
    }
}

