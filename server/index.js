import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js"
import videoRoutes from "./routes/videos.js"
import commentRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"
//Create server
const app = express();
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

//Routes
app.use('/api/users', userRoutes)
app.use('/api/videos', videoRoutes)
app.use('/api/comments', commentRoutes)
app.use('/api/auth', authRoutes)

// Server
app.listen(process.env.PORT_SERVER, () => {
    connectToDataBase()
    console.log('Server is up')
});