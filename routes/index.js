const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/jessica', (req, res, next) => {
  res.render('jessica');
});

module.exports = router;