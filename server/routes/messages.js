import express from 'express';
import {composeMessages} from '../controllers/messages';
import {getMessages} from '../controllers/messages';
const router = express.Router();


router.post('/api/v1/messages', composeMessages);
router.get('/api/v1/messages', getMessages);





export default router;