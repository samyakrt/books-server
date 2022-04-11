const express = require('express');
const router = express.Router()
const AuthorController = require('~controllers/AuthorController');
const authMiddleware = require('~middleware/auth');
const authorController = new AuthorController()

router.use(authMiddleware);
router.get('/',authorController.index.bind(authorController))
router.get('/:author/books',authorController.showAuthorBooks.bind(authorController));
router.post('/:author/books',authorController.addBook.bind(authorController))

module.exports = router;