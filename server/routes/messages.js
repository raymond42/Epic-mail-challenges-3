import express from 'express';
import {composeMessages} from '../controllers/messages';
const router = express.Router();


router.post('/api/v1/messages',composeMessages);





export default router;