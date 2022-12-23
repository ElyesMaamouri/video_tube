import express from 'express'
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, updateUser } from "../controllers/userController.js";
import { verifyToken } from '../utilis/verifyToken.js'

const router = express.Router();

// Update user
router.put("/:id", verifyToken, updateUser);
// Delete a user
router.delete("/:id", verifyToken, deleteUser);
// Get a user
router.get("/find/:id", verifyToken, getUser);
// Subscribe a user
router.put("/sub/:id", verifyToken, subscribe);
// UnSubscribe user
router.put("/unsub/:id", verifyToken, unsubscribe);
// Like a video
router.put("/like/:videoId", verifyToken, like);
// dislike a video
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;