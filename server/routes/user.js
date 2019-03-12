import express from 'express';
const router = express.Router();

import {signup} from '../controllers/users';
import {login} from '../controllers/users';

router.post('/api/v1/users/signup', signup);
router.post('/api/v1/users/login', login);

export default router;