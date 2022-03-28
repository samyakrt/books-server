const { Book } = require('~models');

class BookController { 
    static async  index(req,res) {
        const books = await Book.findAll();
        return res.json({ 
            books
        })

    }
}

module.exports = BookController