import { db } from "../app";
import dayjs from "dayjs"

export async function criarTransacao(req, res){

    const { userId} = res.locals
    const { valor, descricao, tipo} = req.body
    try{
        const transacao = { valor, descricao, tipo, date: dayjs().valueOf(), userId}
        await db.collection("transacao").insertOne(transacao)
        res.sendStatus(201)

    }catch(err){
        res.status(500).send(err.message)
    }
}

export async function lerTransacao(req, res){
    const {userId} = res.locals

    try{
        const transacao = await db.collection("transacao").find({userId}).sort({date: -1}).toArray()

        res.send(transacao)
    }catch(err){
        res.status(500).send(err.message)
    }
}