import pool from './index';

const createTables = () => {
  const users = `CREATE TABLE IF NOT EXISTS
          userTb(
            id UUID PRIMARY KEY,
            firstname VARCHAR(128) NOT NULL,
            lastname VARCHAR(128) NOT NULL,
            email VARCHAR(128) NOT NULL,
            password VARCHAR(128) NOT NULL
          )`;

  const userMessages = `CREATE TABLE IF NOT EXISTS
         userMessage(
            id UUID PRIMARY KEY,
            user_id SERIAL UNIQUE,
            action VARCHAR(128) NOT NULL,
            message_id integer,
            created_on date
          )`;

  const messages = `CREATE TABLE IF NOT EXISTS
          messages(
            id SERIAL PRIMARY KEY,
            sender_id INTEGER,
            receiver_id INTEGER,
            subject VARCHAR(128) NOT NULL,
            message VARCHAR(128) NOT NULL,
            status VARCHAR(128) NOT NULL,
            created_on date
          )`;

  const userGroup = `CREATE TABLE IF NOT EXISTS
          userGroup(
            id UUID PRIMARY KEY,
            group_id UUID,
            user_id UUID,
            user_role VARCHAR(128) NOT NULL,
            created_on date
          )`;

  const group = `CREATE TABLE IF NOT EXISTS
          groupTb(
            id UUID PRIMARY KEY,
            name VARCHAR(128) NOT NULL,
            role VARCHAR(128) NOT NULL,
            created_on date
          )`;

  const groupMessages = `CREATE TABLE IF NOT EXISTS
          groupMessages(
            group_id UUID PRIMARY KEY,
            message_id UUID,
            created_on date
          )`;

  const tables = `${users}; ${userMessages}; ${messages}; ${userGroup}; ${group}; ${groupMessages}`;

  pool.query(tables);
};
createTables();
// require('make-runnable');

export default createTables;
