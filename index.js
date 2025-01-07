import express from "express"
import { connectDB } from "./database/db.js"
const app=express()

app.use(express.json())


app.listen(6000,()=>{
    connectDB()
    console.log(`Server is running in port:6000`)
})