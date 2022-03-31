const express = require('express');
const router = express.Router()
const AuthorController = require('~controllers/AuthorController');
const authMiddleware = require('~middleware/auth');

router.use(authMiddleware);
router.get('/',AuthorController.index)
router.get('/:author/books',AuthorController.showAuthorBooks);
router.post('/:author/books',AuthorController.addBook)

module.exports = router;