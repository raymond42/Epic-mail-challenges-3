/* eslint-disable no-console */

import { Pool } from 'pg';
import { config } from 'dotenv';

config();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Epic-Mail',
  password: 'niyayindi@2019',
  port: 5432,
});

pool.connect();

pool.on('connect', () => {
  console.log('connected to the db');
});

export default pool;
