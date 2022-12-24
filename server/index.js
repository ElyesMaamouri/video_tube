import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js"
import videoRoutes from "./routes/videos.js"
import commentRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser";
import cors from "cors";
//Create server
const app = express();
app.use(cors())
dotenv.config();

//Connect to database
mongoose.set('strictQuery', true);
const connectToDataBase = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('connected to DB')
    }).catch((err) => {
        throw err
    })
}

app.use(cookieParser())
// Allow application to take any json file
app.use(express.json())
//Routes
app.use('/api/users', userRoutes)
app.use('/api/videos', videoRoutes)
app.use('/api/comments', commentRoutes)
app.use('/api/auth', authRoutes)
// Handling errors express server
app.use((err, req,res,next)=> {
    
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status : status,
        message : message
    })
})


// Test Cookies
// app.get('/', function (req, res) {
//     // Cookies that have not been signed
//     console.log('Cookies: ', req.cookies)
  
//     // Cookies that have been signed
//     console.log('Signed Cookies: ', req.signedCookies)
//   })


// Server
app.listen(process.env.PORT_SERVER, () => {
    connectToDataBase()
    console.log('Server is up')
});