import express, {Router} from 'express'
import {signup} from "../controllers/authController.js"

const router = express.Router();

//Create a user
router.post('/signup', signup );
// Sign in
router.post('/sigin' );
// Google Auth
router.post('/google' );
export default router;