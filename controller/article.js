const { Article, User } = require("../model");

exports.getArticles = async (req, res, next) => {
    try {
        // 解析数据
        const { limit = 20, offset = 0, tag, author } = req.query;
        // 查询条件
        const filter = {};
        if (tag) {
            filter.tagList = tag;
        }
        if (author) {
            // 查找作者ID
            const user = await User.findOne({ username: author });
            filter.author = user ? user._id : null;
        }
        const articles = await Article.find(filter)
            .skip(Number.parseInt(offset))
            .limit(Number.parseInt(limit))
            .sort({
                createAt: -1,
            })
            .populate("author");
        const articlesCount = await Article.countDocuments();
        res.status(200).json({
            articles,
            articlesCount,
        });
    } catch (err) {
        next(err);
    }
};

exports.feedArticles = async (req, res, next) => {
    try {
        res.send("get /feed");
    } catch (err) {
        next(err);
    }
};

exports.getArticle = async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.articleId).populate(
            "author"
        );
        if (!article) {
            return res.status(404).end();
        }
        res.status(200).json({
            article,
        });
    } catch (err) {
        next(err);
    }
};

exports.createArticle = async (req, res, next) => {
    try {
        const article = new Article(req.body.article);
        article.author = req.user._id;
        // 映射数据
        article.populate("author").execPopulate();
        await article.save();
        res.status(201).json({
            article,
        });
    } catch (err) {
        next(err);
    }
};

exports.updateArticle = async (req, res, next) => {
    try {
        const article = req.article;
        const bodyArticle = req.body.article;
        article.title = bodyArticle.title || article.title;
        article.description = bodyArticle.description || article.description;
        article.body = bodyArticle.body || article.body;
        await article.save();
        res.status(200).json({
            article,
        });
    } catch (err) {
        next(err);
    }
};
exports.deleteArticle = async (req, res, next) => {
    try {
        const article = req.article;
        await article.remove();
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};
exports.addComments = async (req, res, next) => {
    try {
        res.send("post /:slug/comments");
    } catch (err) {
        next(err);
    }
};

exports.getComments = async (req, res, next) => {
    try {
        res.send("get /:slug/comments");
    } catch (err) {
        next(err);
    }
};

exports.deleteComment = async (req, res, next) => {
    try {
        res.send("del /:slug/comments/:id");
    } catch (err) {
        next(err);
    }
};
exports.favoriteArticle = async (req, res, next) => {
    try {
        res.send("post /:slug/favorite");
    } catch (err) {
        next(err);
    }
};
exports.unfavoriteArticle = async (req, res, next) => {
    try {
        res.send("del /:slug/favorite");
    } catch (err) {
        next(err);
    }
};
