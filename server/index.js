import express from 'express';
import Connection from './database/db.js';
import Router from './routes/route.js'
const app=express();

app.use('/', Router);

app.listen(8000, ()=>{
    console.log("server is runninr successfully on hello 8000.");
})
Connection();