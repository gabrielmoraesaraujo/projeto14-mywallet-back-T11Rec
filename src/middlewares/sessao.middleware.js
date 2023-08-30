import { db } from "../app.js"
export async function validaSessao (req, res, next){
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "") 

    if(!token ) return res.status(404).send("Token não existente")

    try{

        const sessao = await db.collection("sessao").findOne({ token})
        if(!sessao) return res.status(404).send("Token não válido")

        res.locals.token = token
        res.locals.userId = sessions.userId

        next()

    }catch(err){
        res.status(500).send(err.message)
    }
   
}