const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getusers);
router.post('/', userController.addUser);
router.delete('/:index', userController.deleteUser);

module.exports = router;
