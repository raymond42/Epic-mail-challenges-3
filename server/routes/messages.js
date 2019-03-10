import express from 'express';
import {composeMessages} from '../controllers/messages';
import {getMessages} from '../controllers/messages';
import {getOneMessage} from '../controllers/messages';
import {getReadMessages} from '../controllers/messages';
import {getUnReadMessages} from '../controllers/messages';
import {getReceivedMessages} from '../controllers/messages';
import {deleteMessage} from '../controllers/messages';
const router = express.Router();


router.post('/api/v1/messages', composeMessages);
router.get('/api/v1/messages', getMessages);
router.get('/api/v1/messages/read', getReadMessages);
router.get('/api/v1/messages/unread', getUnReadMessages);
router.get('/api/v1/messages/received', getReceivedMessages);
router.delete('/api/v1/messages/:id', deleteMessage);
router.get('/api/v1/messages/:id', getOneMessage);







export default router;