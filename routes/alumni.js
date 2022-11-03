import express from 'express';
import { createAlumni } from '../controllers/alumni.js';
import { getAlumni } from '../controllers/alumni.js';
import { getAlumnis } from '../controllers/alumni.js';
import { deleteAlumni } from '../controllers/alumni.js';
import { updateAlumni } from '../controllers/alumni.js';

const router = express.Router();

//Alumni routes already start with /alumni
router.get('/:id', getAlumni);

router.get('/', getAlumnis);

router.post('/', createAlumni);

router.delete('/:id', deleteAlumni);

router.patch('/:id', updateAlumni);

export default router;