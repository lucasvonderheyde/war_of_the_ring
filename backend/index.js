const express = require('express');
const db = require('./db'); // Make sure the path to your db.js file is correct
const app = express();
const port = 3001;

app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.json({ currentTime: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
