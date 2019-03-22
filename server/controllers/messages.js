/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable radix */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
import moment from 'moment';
// import messages from '../models/messages';
import validateMessages from '../helpers/messagesValidation';
import pool from '../src/usingDb/db/index';

// compose/post messages
export const composeMessages = ((req, res) => {
  const { error } = validateMessages.validation(req.body);
  if (error) {
    res.status(400).send(error);
    return;
  }
  
  const newMessages = {
    id: _id,
    subject: req.body.subject,
    message: req.body.message,
    receiverId: req.body.receiver_id,
    status: req.body.status,
    createdOn: moment().format('LL'),
  };
  const _id = parseInt(newMessages.length + 1);

  const msgdb = 'INSERT INTO messages (subject,message,receiverId,status) VALUES($1,$2,$3,$4) RETURNING *';
  pool.query(msgdb, [newMessages.subject, newMessages.message, newMessages.receiverId, newMessages.status])
    .then(msgdb => (
      res.send({
        status: 200,
        data: msgdb.rows[0],
      })))
    .catch(error => res.status(500).json({ error }));
});
