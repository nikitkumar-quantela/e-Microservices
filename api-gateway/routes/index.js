// Routing for API Gateway
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('API Gateway is running!');
});

router.use('/soma', require('../../services/soma-services/routes/somaRoutes.js'));


module.exports = router;
