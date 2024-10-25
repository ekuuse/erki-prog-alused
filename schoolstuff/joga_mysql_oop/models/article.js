const BaseSQLModel = require('./base.js');

class ArticleModel extends BaseSQLModel {
    constructor() {
        super('article');
    }

    async findAll(){
        const articles = await super.findAll()
        return articles
    }

    async findOne(slug){
        const article = await super.findOne('slug', slug)
        return article
    }

    async findMany(id){
        const articles = await super.findMany('author_id', id)
        return articles
    }

    async create(article){
        const createdArticleId = await super.create(article)
        return createdArticleId
    }

    async update(id, article){
        const updatedArticle = await super.update(id, article)
        return updatedArticle
    }
}
module.exports = ArticleModel;