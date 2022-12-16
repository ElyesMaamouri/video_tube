import mongoose from "mongoose";
import User from '../models/User.js';


export const signup = (req, res) => {
 try {
const newUser = new User(req.body)
console.log('newuser', newUser)
 }catch (err) {

 }
}  