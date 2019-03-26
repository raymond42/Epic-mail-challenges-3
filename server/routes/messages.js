import express from 'express';
const router = express.Router();


import {composeMessages,getAllMessages,getSentMessages} from '../controllers/messages';


router.post('/api/v2/messages', composeMessages);
router.get('/api/v2/messages', getAllMessages);
router.get('/api/v2/messages/sent', getSentMessages);
router.get('/api/v2/messages/:id', );


export default router;