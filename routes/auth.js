const express = require('express');
const router = express.Router();
const UserController = require('~controllers/UserController');
const userValidation = require('~validations/UserRequest');
const LoginValidation = require('~validations/LoginRequest');
const handler = require('~validations/handler');
const userController = new UserController();

router.post(`/register`, userValidation, handler, userController.register.bind(userController));
router.post(`/login`, LoginValidation, handler, userController.login.bind(userController));

module.exports = router;