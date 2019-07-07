const express = require('express');
const items = require('./items');
const item = require('./item');

const router = express.Router();

router.get('/api/items', items);
router.get('/api/items/:id', item);

module.exports = router;
