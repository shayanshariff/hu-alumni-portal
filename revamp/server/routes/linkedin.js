import express from 'express';
import { fetchProfileData } from '../controllers/linkedin.js';

const router = express.Router();


router.post('/getProfileData', fetchProfileData);


export default router;
