import express from "express";
import auth from "../middleware/auth.js";
import {signin, signup, fetchUserById, followUser, unfollowUser} from '../controllers/user.js';
const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/:id', fetchUserById);
router.patch('/:id/follow',auth, followUser);
router.patch('/:id/unfollow', auth, unfollowUser);


export default router;