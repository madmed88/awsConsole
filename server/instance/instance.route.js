const express = require('express');
const router = express.Router();

const instanceController = require('./instance.controller');
router.post('/', instanceController.create);
router.get('/', instanceController.list);
router.get('/:id', instanceController.details);
router.put('/:id', instanceController.update);
router.delete('/:id', instanceController.delete);

module.exports = router;
