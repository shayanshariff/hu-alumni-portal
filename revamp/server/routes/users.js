import express from "express";

import {signin, signup, get} from '../controllers/user.js';
const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/get', get);

export default router;