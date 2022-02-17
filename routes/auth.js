const express = require('express');
const router = express.Router();
const UserController = require('~controllers/UserController');
const userValidation = require('~validations/UserRequest');
const LoginValidation = require('~validations/LoginRequest');
const handler = require('~validations/handler');

router.post(`/register`, userValidation, handler, UserController.register);
router.post(`/login`, LoginValidation, handler, UserController.login);

module.exports = router;