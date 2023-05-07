import express from "express";
import auth from "../middleware/auth.js";
import {signin, signup, fetchUserById, followUser, updateUser, unfollowUser, getUserData, fetchUserLikes, getUsers} from '../controllers/user.js';
const router = express.Router();



router.post('/signin', signin);
router.post('/signup', signup);
router.get('/:id', fetchUserById);
router.patch('/:id/follow',auth, followUser);
router.patch('/:id/unfollow', auth, unfollowUser);
router.get("/user-likes/:id", fetchUserLikes);
router.get('/data/:id', getUserData);
router.get('/', getUsers);
router.patch('/:id', updateUser);

export default router;