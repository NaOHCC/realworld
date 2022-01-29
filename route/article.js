const express = require("express");
const router = express.Router();
const articleCtrl = require("../controller/article");
// 获取文章列表
router.get("/", articleCtrl.getArticles);

// 获取关注用户的文章
router.get("/feed", articleCtrl.feedArticles);

// 获取单篇文章
router.get("/:slug", articleCtrl.getArticle);

// 增加一篇文章
router.post("/", articleCtrl.createArticle);

// 更新一篇文章
router.put("/:slug", articleCtrl.updateArticle);

// 删除一篇文章
router.delete("/:slug", articleCtrl.deleteArticle);

// 增加文章的评论
router.post("/:slug/comments", articleCtrl.addComments);

// 获取文章评论
router.get("/:slug/comments", articleCtrl.getComments);

// 删除一条文章评论
router.delete("/:slug/comments/:id", articleCtrl.getComments);

// 关注文章
router.post("/:slug/favorite", articleCtrl.favoriteArticle);

// 取消关注文章
router.delete("/:slug/favorite", articleCtrl.unfavoriteArticle);

module.exports = router;
