const { Author, Book } = require('~models');

class AuthorController {

    static async index(req, res, next) {
        try {
            const authors = await Author.findAll({
                include: Book
            });
            return res.json({
                authors
            })
        } catch (error) {
            return res.status(500).json({
                error: `Something went wrong!`
            })
        }
    }

    static async addBook(req, res, next) {
        try {
            const { author } = req.params;
            const bookAuthor = await Author.findOne({
                where: {
                    id: author
                }
            })

            const { name, isbn, price } = req.body;
            const book = {
                name,
                isbn,
                price,
                addedBy: req.user.id
            }

            await bookAuthor.createBook(book)
            return res.status(201).json({
                message: 'book added successfully.'
            })
        } catch (error) {
            next(error)
        }
    }

    static async showAuthorBooks(req, res, next) {
        try {
            const { author: id } = req.params;
            const author = await Author.findOne({
                where: {
                    id
                }
            })

            if (!Object.keys(author).length) {
                return res.status(404).json({
                    message: 'author not found'
                })
            }

            const author_books = await Book.findAndCountAll({
                limit: 5,
                offset: 5,
                where: {
                    authorId: id
                }
            });

            return res.status(200).json({
                author_books
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = AuthorController