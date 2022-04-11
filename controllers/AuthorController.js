const { Author, Book } = require('~models');
const Pagination  =require('~controllers/abstracts/Pagination')

class AuthorController extends Pagination {

     async index(req, res, next) {
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

     async addBook(req, res, next) {
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

    async showAuthorBooks(req, res, next) {
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

            let { page,per_page,search} = req.query;

            if(!page) {
                page = 1
            }

            if(!per_page) {
                per_page = 5
            }


            const author_books = await Book.findAndCountAll({
                limit: per_page,
                offset: (new Number(page) - 1) * new Number(per_page),
                where: {
                    authorId: id
                }
            });

            const response = this.paginationResponse(author_books,page,per_page,author_books?.total_items)
            return res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = AuthorController