const db = require('../utils/db')

class bookController {
    constructor() {
        const books = []
    }

    async getAllbooks(req, res) {
        const [books] = await db.execute('SELECT * FROM books');
        const cleanBooks = books.map(book => {
            return {
                ...book,
                imageUrl: book.imageUrl ? book.imageUrl.toString() : null
            };
        });
        // res.status(201).json({ books: cleanBooks });
        res.render('books', { books: cleanBooks });
    }
    
    async getAllbooksAdmin(req, res) {
        const [books] = await db.execute('SELECT * FROM books');
        const cleanBooks = books.map(book => {
            return {
                ...book,
                imageUrl: book.imageUrl ? book.imageUrl.toString() : null
            };
        });
        // res.status(201).json({ books: cleanBooks });
        res.render('admin', { books: cleanBooks });
    }
    
    async editbookAdmin(req, res) {
        const [books] = await db.execute(`SELECT * FROM books WHERE id = ${req.params.id}`);
        const cleanBooks = books.map(book => {
            return {
                ...book,
                imageUrl: book.imageUrl ? book.imageUrl.toString() : null
            };
        });
        // res.status(201).json({ books: cleanBooks });
        res.render('adminedit', { books: cleanBooks });
    }

    async createNewbook(req,res){
        const newbook = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            imageUrl: req.body.imageUrl
        }
        db.execute(`INSERT INTO books SET title = '${req.body.title}', imageUrl = '${req.body.imageUrl}', description = '${req.body.description}', price = ${parseFloat(req.body.price)}`)
        .then(([result]) => {
            const bookId = result.insertId;
            res.status(201).json({
                message: `created book with id ${bookId}`,
                book: {id: bookId, ...newbook}
            })
        })
        .catch((err) => {
            console.error("error inserting book: ", err)
          });
    }

    async updatebook(req,res){
        const updatedbook = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            imageUrl: req.body.imageUrl
        }
        const bookId = req.params.id
        db.execute(`UPDATE books SET title = '${req.body.title}', imageUrl = '${req.body.imageUrl}', description = '${req.body.description}', price = ${parseFloat(req.body.price)} WHERE id = ${bookId}`)
        res.status(201).json({
            message: `updated book with id ${bookId}`,
            book: {id: bookId, ...updatedbookFinished}
        })
    }

    async deletebook(req,res){
        const bookId = req.params.id
        db.execute(`DELETE FROM books WHERE id = ${bookId}`)
        res.status(201).json({
            message: `deleted book with id ${bookId}`
        })
    }
}

//export controller functions
module.exports = bookController