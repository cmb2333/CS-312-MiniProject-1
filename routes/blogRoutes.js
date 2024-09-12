const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { posts: [] });  // Initially, pass an empty array
});

module.exports = router;
