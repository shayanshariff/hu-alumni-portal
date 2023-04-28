import express from "express";
import auth from "../middleware/auth.js";

import {getPosts, createPost, updatePost, deletePost, likePost, getAlumniPosts, getNumPosts, getAllPosts} from '../controllers/posts.js';
const router = express.Router();



router.get("/", auth, getPosts);
router.get("/alumni", auth, getAlumniPosts);
router.get("/all", auth, getAllPosts);
router.post("/",  auth, createPost);
router.patch("/:id",  auth, updatePost);
router.delete("/:id",  auth, deletePost);
router.patch("/:id/likePost",  auth, likePost);
router.get('/numPosts', getNumPosts);

export default router;