const { Pool } = require('pg');

const pool = new Pool({
  user: 'owner',
  host: 'localhost',
  database: 'war_of_the_ring',
  password: 'Aragorn',
  port: 5432,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
