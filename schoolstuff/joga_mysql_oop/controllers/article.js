const articleDbModel = require('../models/article.js')
const articleModel = new articleDbModel()

class articleController {
    constructor() {
        const articles = []
    }

    async getAllArticles(req,res){
        const articles = await articleModel.findAll()
        res.status(201).json({articles: articles})
    }

    async getArticleBySlug(req, res){
        const article = await articleModel.findOne(req.params.slug)
        res.status(201).json({article: article})
    }
}

//export controller functions
module.exports = articleController