const express = require('express');
const router = express.Router();
const { getServerInfo } = require('../controllers/serverControllers');

// Define routes
router.get('/info', getServerInfo);

module.exports = router;
