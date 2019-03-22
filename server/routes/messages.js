import express from 'express';
const router = express.Router();


import {composeMessages} from '../controllers/messages';


router.post('/api/v2/messages', composeMessages);


export default router;