const express = require('express');
const router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

const instanceController = require('./instance.controller');
router.post('/', auth, instanceController.create);
router.get('/', auth, instanceController.list);
router.get('/:id', auth, instanceController.details);
router.put('/:id', auth, instanceController.update);
router.delete('/:id', auth, instanceController.delete);

module.exports = router;
