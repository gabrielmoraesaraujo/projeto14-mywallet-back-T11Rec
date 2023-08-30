import { db } from "../app.js"
import bcrypt from "bcrypt"
import { userSchema } from "../schemas/autentificaSchema.js"

export async function sing_Up(req, res){

    const { nome, email, senha} = req.body 

    const validation = userSchema.validate(req.body, { abortEarly: false})

    if(validation.error){
        const errors = validation.error.details.map(detail =>  detail.message)
        console.log(req.body)
        return res.status(422).send(errors)
    }  res.sendStatus(201)

    try{

        const user = await db.collection("users").findOne({email})
        if(user) return res.status(409).send("Usuario já existente")

        const hash = bcrypt.hashSync(senha, 10)

        await db.collection("users").insertOne({nome, email, password: hash})
        res.sendStatus(201)

    }catch(err){
        res.status(500).send(err.message)
    }
}

export async function sing_In(req, res){

    const { nome, email, senha} = req.body 

    try{

        const user = await db.collection("users").findOne({email})
        if(user) return res.status(409).send("Usuario já existente")

        const hash = bcrypt.hashSync(senha, 10)

        await db.collection("users").insertOne({nome, email, password: hash})
        res.sendStatus(201)

    }catch(err){
        res.status(500).send(err.message)
    }
}

export async function sing_Out(req, res){

    const { nome, email, senha} = req.body 

    try{

        const user = await db.collection("users").findOne({email})
        if(user) return res.status(409).send("Usuario já existente")

        const hash = bcrypt.hashSync(senha, 10)

        await db.collection("users").insertOne({nome, email, password: hash})
        res.sendStatus(201)

    }catch(err){
        res.status(500).send(err.message)
    }
}