import express from 'express';
const router = express.Router();

import {signup} from '../controllers/users';
import {login} from '../controllers/users';
import {getContact} from '../controllers/users';
import {getAllContacts} from '../controllers/users';

router.post('/api/v2/users/signup', signup);
router.post('/api/v2/users/login', login);
router.get('/api/v2/users/contact/:id', getContact);
router.get('/api/v2/users/contacts', getAllContacts);

export default router;