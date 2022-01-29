exports.getArticles = async (req, res, next) => {
    try {
        res.send("get /");
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
        res.send("get /:slug");
    } catch (err) {
        next(err);
    }
};

exports.createArticle = async (req, res, next) => {
    try {
        res.send("post /");
    } catch (err) {
        next(err);
    }
};

exports.updateArticle = async (req, res, next) => {
    try {
        res.send("put /:slug");
    } catch (err) {
        next(err);
    }
};
exports.deleteArticle = async (req, res, next) => {
    try {
        res.send("del /:slug");
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
