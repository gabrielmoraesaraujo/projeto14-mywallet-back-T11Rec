import express, { Router, request, response } from "express";
import cors from "cors"
import dotenv from "dotenv"
import { MongoClient, ObjectId } from "mongodb";
import router from "./routes/index.routes.js"


const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URL)

try{
    await mongoClient.connect()
    console.log("Mongo ta conectado")
}catch(err){
    console.log(err.message)

}

export const db = mongoClient.db()

app.listen(5000, () => console.log('App rodando na porta 5000'))