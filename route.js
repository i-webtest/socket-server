const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('Access-Controll-Allow-Origin', '*');

  res.setHeader('Access-Controll-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Controll-Allow-Headers', 'X-Requested-With,content-type');

  res.send('Это только мой мир!');
});

module.exports = router;
