const { Article } = require("../model");

exports.showIndex = async (req, res, next) => {
    try {
        const page = req.query.page ? Number.parseInt(req.query.page) : 1;
        const pageSize = 10;
        const articlesCount = await Article.countDocuments();
        const articles = await Article.find()
            .skip((page - 1) * pageSize)
            .limit(pageSize);
        res.render("index", {
            articles,
            page,
            pageSize,
            articlesCount,
            totalPage: Math.ceil(articlesCount / pageSize),
        });
    } catch (err) {
        next(err);
    }
};
exports.showEditor = async (req, res, next) => {
    try {
        res.render("editor");
    } catch (err) {
        next(err);
    }
};
exports.showArticle = async (req, res, next) => {
    try {
        res.render("article");
    } catch (err) {
        next(err);
    }
};
