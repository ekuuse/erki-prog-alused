const BaseSQLModel = require('./base.js');
const articleDbModel = require('../models/article.js')
const articleModel = new articleDbModel()

class AuthorModel extends BaseSQLModel {
    constructor() {
        super('author');
    }

    async getArticles(id){
        const articles = articleModel.findMany('id', id)
        return articles
    }
}
module.exports = AuthorModel;