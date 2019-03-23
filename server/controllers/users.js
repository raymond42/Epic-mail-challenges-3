/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable radix */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */

// import messages from '../models/messages';
import moment from 'moment';
import pool from '../src/usingDb/db/index';
import validateUserSignup from '../helpers/usersValidationSignup';
import jwt from 'jsonwebtoken';

// signup

const sign = (data) => jwt.sign(data,'awesome');
export const signup = ((req, res) => {
  const { error } = validateUserSignup.validation(req.body);
  if (error) {
    res.status(400).send(error);
    return;
  }
  
  const newUser = [
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.password,
  ];

  const msgdb = 'INSERT INTO users(firstname,lastname,email,password) VALUES($1,$2,$3,$4) RETURNING *';
  pool.query(msgdb, newUser)
    .then(msgdb => (
      res.send({
        status: 200,
        data: sign(msgdb.rows[0]),
      })))
    .catch(error => res.status(500).json({ error }));
});

export const login = ((req, res) => {
    
    const newUser = [
      req.body.email,
      req.body.password,
    ];
  
    const msgdb = 'SELECT * FROM users WHERE email=$1 AND password=$2';
    pool.query(msgdb, newUser)
      .then(msgdb => {
        if(msgdb.rows.length===0){
            return res.status(400).json({ error : 'Invalid username or password'  })
        }
        res.send({
          status: 200,
          data: sign(msgdb.rows[0]),
        })})
      .catch(error => res.status(500).json({ error }));
  });

