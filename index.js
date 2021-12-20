//import express
import express from "express";
//import mongoose
import mongoose from "mongoose";
//import routes
import route from "./routes/index.js";
//import cors
import cors from "cors";


//express function
const app =express();
//connection url
const url = "mongodb://127.0.0.1:27017/restful_db"

//connect to the mongoDB database
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('error', (error)=>console.error(error));
db.once('open', ()=> console.log(`Database Connected: ${url} `));

//middleware
app.use(cors());
app.use(express.json());
app.use('/product',route);

//listening to port
app.listen('3000',()=> console.log('Server Running at port:3000'));


