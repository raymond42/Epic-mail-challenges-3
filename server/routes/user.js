import express from 'express';
const router = express.Router();

import {signup} from '../controllers/users';

router.post('/api/v1/users', signup);

export default router;