const { Author, Book } = require('~models');

class AuthorController {

    static async index(req,res,next) {
        try {
            const authors = await Author.findAll({
                include:Book
            });
            return res.json({
                authors
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                error: `Something went wrong!`
            })
        }
    }

    static async addBook(req,res) {
        try {
            const { author } = req.params;
            const bookAuthor = await Author.findOne({
                where:{ 
                    id: author
                }
            })
            const { name,isbn,price,addedBy } = req.body;

            const book = {
                name,isbn,price,
            }
            
            await bookAuthor.createBook(book)
            return res.json({
                message:'hello'
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = AuthorController