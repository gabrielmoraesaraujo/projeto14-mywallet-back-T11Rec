import express, { request, response } from "express";
import cors from "cors"
import dotenv from "dotenv"
import joi from "joi"
import { MongoClient, ObjectId } from "mongodb";


const app = express()

app.use(cors())
app.use(express.json())
dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URL)

try{
    await mongoClient.connect()
    console.log("Mongo ta conectado")
}catch(err){
    console.log(err.message)

}

const db = mongoClient.db()

app.get('/cadastro', async (request, response) => {
    try{
        console.log('Ta rodando')
        return response.status(200).send('Foi')
    }catch(err){
        return response.status(500).send(err.message)
    }
})


app.listen(5000, () => console.log('App rodando na porta 5000'))