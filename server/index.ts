import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT||8004;

app.get('/',(req:any,res:any)=>{
    res.send("Home page");
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`)
})