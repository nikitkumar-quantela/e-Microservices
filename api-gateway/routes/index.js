// Routing for API Gateway
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('API Gateway is running!');
});

module.exports = router;
