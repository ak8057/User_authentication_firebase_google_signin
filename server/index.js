import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import authRouter from "./routes/authRoute.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


//! 1.middelwares
app.use(cors());
app.use(express.json())


//!2.routes
app.use('/api/auth' , authRouter);


//!3.connection with database
mongoose
  // .connect("mongodb://127.0.0.1:27017/authentication")   //using with local mongo setup
  .connect(process.env.MONGO_URI)     // use with docker setup

    .then(() => console.log("Connection to database successfully done "))
    .catch((error) => console.error("Failed to connect to mongoDB", error));
  


//!4.global error handler
app.use((err, req, res, next) => {
  err.statusCode= err.statusCode || 500;
  err.status = err.status || 'error';
  res.status(err.statusCode).json({
    status: err.status,
    message:err.message,
  });


});





app.get('/'  , (req,res) =>{
  res.send("hello world baby")
})



//! listenning to port 
app.listen(port ,()=>{
  console.log(`server is running on port ${port}`)
})

