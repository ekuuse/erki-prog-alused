const BaseSQLModel = require('./base.js');

class bookModel extends BaseSQLModel {
    constructor() {
        super('books');
    }

    async findAll(){
        const books = await super.findAll()
        return books
    }

    async findOne(slug){
        const book = await super.findOne('slug', slug)
        return book
    }

    async findMany(id){
        const books = await super.findMany('author_id', id)
        return books
    }

    async create(book){
        const createdbookId = await super.create(book)
        return createdbookId
    }

    async update(id, book){
        const updatedbook = await super.update(id, book)
        return updatedbook
    }
}
module.exports = bookModel;