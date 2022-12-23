import express from 'express'
import {addVideo, addViewVideo, deleteVideo, getByTag, getVideo, randomVideo, getByTilte, subVideo, trendVideo, updateVideo} from "../controllers/videoController.js";
import { verifyToken } from '../utilis/verifyToken.js'


const router = express.Router();
// Create a video
router.post("/", verifyToken, addVideo);
// Delete a video
router.delete("/:id", verifyToken, deleteVideo);
// Update a video
router.put("/:id", verifyToken, updateVideo);
// Get a video
router.get("/find/:id", getVideo);
// Update add views
router.put("/view/:id", addViewVideo)
// trend video
router.get("/trend", trendVideo)
// random video
router.get("/random", randomVideo)
// Sub video
router.get("/sub",verifyToken, subVideo)
// Search video by tags
router.get("/tags", getByTag)
//Search video by title
router.get("/search", getByTilte)
export default router;