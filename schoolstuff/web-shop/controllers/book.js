const db = require('../utils/db')
const bcrypt = require('bcrypt');

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
            book: {id: bookId, ...updatedbook}
        })
    }

    async deletebook(req,res){
        const bookId = req.params.id
        db.execute(`DELETE FROM books WHERE id = ${bookId}`)
        res.status(201).json({
            message: `deleted book with id ${bookId}`
        })
    }

    async getAllbooksCart(req, res) {
        try {
            const userId = req.session.userId;
            console.log(req.session)

            if (!userId) {
                return res.status(401).json({ message: 'Unauthorized: Please log in' });
            }
    
            const [cart] = await db.execute(`SELECT cartId FROM cart WHERE userId = ?`, [userId]);
            
            if (cart.length === 0) {
                return res.render('cart', { books: [] });
            }
    
            const cartId = cart[0].cartId;
    
            const [books] = await db.execute(`
                SELECT books.*, cartItems.quantity
                FROM books
                JOIN cartItems ON books.id = cartItems.productId
                WHERE cartItems.cartId = ?
            `, [cartId]);
    
            if (books.length === 0) {
                return res.render('cart', { books: [] });
            }
    
            const cleanBooks = books.map(book => ({
                ...book,
                imageUrl: book.imageUrl ? book.imageUrl.toString() : null,
                quantity: book.quantity
            }));
    
            res.render('cart', { books: cleanBooks });
    
        } catch (error) {
            console.error('Error fetching cart items:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    
    async addItemToCart(req, res) {
        const userId = req.session.userId;

        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized: Please log in' });
        }

        const [cart] = await db.execute(`SELECT cartId FROM cart WHERE userId = ?`, [userId]);
    
        let cartId;
    
        if (cart.length === 0) {
            const [newCart] = await db.execute(`INSERT INTO cart (userId) VALUES (?)`, [userId]);
            cartId = newCart.insertId;
        } else {
            cartId = cart[0].cartId;
        }
    
        const [existingItem] = await db.execute(
            `SELECT quantity FROM cartItems WHERE cartId = ? AND productId = ?`,
            [cartId, req.body.productId]
        );
    
        if (existingItem.length > 0) {
            const newQuantity = existingItem[0].quantity + 1;
            await db.execute(
                `UPDATE cartItems SET quantity = ? WHERE cartId = ? AND productId = ?`,
                [newQuantity, cartId, req.body.productId]
            );
        } else {
            await db.execute(
                `INSERT INTO cartItems (cartId, productId, quantity, price) VALUES (?, ?, ?, ?)`,
                [cartId, req.body.productId, 1, req.body.price]
            );
        }
    
        console.log('Item added to cart successfully!');
        res.status(201).json({
            message: `Item added to cart`
        });
    }
    
    async removefromCart(req, res) {
        const userId = req.session.userId;

        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized: Please log in' });
        }

        const productId = req.params.productId;
    
        const [cart] = await db.execute(`SELECT cartId FROM cart WHERE userId = ?`, [userId]);
    
        if (cart.length === 0) {
            return res.status(404).json({ message: 'Cart not found for this user' });
        }
    
        const cartId = cart[0].cartId;
    
        await db.execute(`DELETE FROM cartItems WHERE cartId = ? AND productId = ?`, [cartId, productId]);
    
        res.status(200).json({
            message: `Removed product with id ${productId} from cart`
        });
    }

    async purchasefromCart(req, res) {
        const userId = req.session.userId;

        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized: Please log in' });
        }
        
        const [cart] = await db.execute(`SELECT cartId FROM cart WHERE userId = ?`, [userId]);
    
        if (cart.length === 0) {
            return res.status(404).json({ message: 'Cart not found for this user' });
        }
    
        const cartId = cart[0].cartId;
    
        // Remove all items from the cart
        await db.execute(`DELETE FROM cartItems WHERE cartId = ?`, [cartId]);
    
        res.status(200).json({
            message: `All items removed from cart for user with ID ${userId}`
        });
    }
    
    async registerUser(req, res) {
        const { username, email, password } = req.body;
    
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
    
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
    
            await db.execute(
                `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
                [username, email, hashedPassword]
            );
    
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error('Error registering user:', error);
            if (error.code === 'ER_DUP_ENTRY') {
                res.status(400).json({ message: 'Email already exists' });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }

    async loginUser(req, res) {
        const { email, password } = req.body;
    
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
    
        try {
            const [users] = await db.execute(`SELECT * FROM users WHERE email = ?`, [email]);
    
            if (users.length === 0) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
    
            const user = users[0];
            const match = await bcrypt.compare(password, user.password);
    
            if (!match) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
    
            req.session.userId = user.id;
            req.session.save()
            res.status(200).json({ message: 'Login successful', userId: req.session.userId });
        } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    
}

//export controller functions
module.exports = bookController