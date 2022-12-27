import mongoose from "mongoose";
import User from '../models/User.js';
import bcrypt from "bcryptjs";
import { createError } from "../utilis/error.js";
import jwt from "jsonwebtoken";


export const signin = async (req, res, next) => {
    try {

        const user = await User.findOne({ name: req.body.name });
        if (!user) return next(createError(404, 'User not found'));

        const isCorrectPassword = await bcrypt.compare(req.body.password, user.password);
        if (!isCorrectPassword) return next(createError(400, "Wrong Credentials !"));

        const token = jwt.sign({ id: user._id }, process.env.JWT);

        // Send all details user without password
        const { password, ...others } = user._doc
        // Set token in cookies
        res.cookie('access_token', token, {
            httpOnly: true
        }).status(200).json(others)

    } catch (err) {
        next(err)
    }
}

export const signup = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash })
        await newUser.save();
        res.status(200).send("user has been created")
    } catch (err) {
        next(err)
    }
}

export const googleAuth = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            // Login if user exisit
            const token = jwt.sign({ id: user._id }, process.env.JWT);
            // Set token in cookies
            res.cookie('access_token', token, {
                httpOnly: true
            }).status(200).json(user._doc)

        } else {
            // Create new user with google account
            const newUser = new User({
                ...req.body,
                fromGoogle: true
            });
            const savedUser = await newUser.save();
            //send token to front-end
            const token = jwt.sign({ id: savedUser._id }, process.env.JWT);
            // Set token in cookies
            res.cookie('access_token', token, {
                httpOnly: true
            }).status(200).json(savedUser._doc)
        }
    } catch (err) {
        next(err)
    }
}