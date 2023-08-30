import { db } from "../app.js"
import bcrypt from "bcrypt"
import {v4 as uuid} from "uuid"

export async function sign_Up(req, res){

    const { nome, email, senha} = req.body 



    try{
        const user = await db.collection("users").findOne({email})
   
        if(user) {
            return res.status(409).send("Usuario já existente")
        }
        const hash = bcrypt.hashSync(senha, 10)
        await db.collection("users").insertOne({nome, email, password: hash})
        res.sendStatus(201)

    }catch(error){
        res.status(500).send(error.message)
    }
}

export async function sign_In(req, res){

    const { email, senha} = req.body 

    try{

        const user = await db.collection("users").findOne({email})
        if(!user) return res.status(404).send("Usuario não encontrado")

        const senhaCorreta = bcrypt.compareSync(senha, user.senha)
        if(!senhaCorreta) return res.status(401).send("Senha incorreta")
        
        const token = uuid()
        await db.collection("sessao").insertOne({token, userId:user._id})
        res.send({ token, userNome: user.nome})
      

    }catch(err){
        res.status(500).send(err.message)
    }
}

export async function sign_Out(req, res){

    const {token} = res.locals

    try{
        await db.collection("sessao").deleteOne({token})
        res.status(200)
    }catch(err){
        res.status(500).send(err.message)


    }
}