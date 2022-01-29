const express = require("express");
const router = express.Router();
const articleCtrl = require("../controller/article");
const auth = require("../middleware/auth");
const articleValidator = require("../vaildator/article");
// 获取文章列表
router.get("/", articleCtrl.getArticles);

// 获取关注用户的文章
router.get("/feed", articleCtrl.feedArticles);

// 获取单篇文章
router.get("/:articleId", articleValidator.getArticle, articleCtrl.getArticle);

// 创建一篇文章
router.post(
    "/",
    auth,
    articleValidator.createArticle,
    articleCtrl.createArticle
);

// 更新一篇文章
router.put(
    "/:articleId",
    auth,
    articleValidator.updateArticle,
    articleCtrl.updateArticle
);

// 删除一篇文章
router.delete(
    "/:articleId",
    auth,
    articleValidator.deleteArticle,
    articleCtrl.deleteArticle
);

// 增加文章的评论
router.post("/:articleId/comments", articleCtrl.addComments);

// 获取文章评论
router.get("/:articleId/comments", articleCtrl.getComments);

// 删除一条文章评论
router.delete("/:articleId/comments/:id", articleCtrl.getComments);

// 关注文章
router.post("/:articleId/favorite", articleCtrl.favoriteArticle);

// 取消关注文章
router.delete("/:articleId/favorite", articleCtrl.unfavoriteArticle);

module.exports = router;
