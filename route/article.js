const express = require("express");
const router = express.Router();
const articleCtrl = require("../controller/article");
const auth = require("../middleware/auth");
const articleValidator = require("../vaildator/article");
router.get("/", articleCtrl.showIndex);

router.get("/editor", auth, articleCtrl.showEditor);

router.get("/editor/:articleId", auth, articleCtrl.showEditor);

router.get("/article/:articleId", articleCtrl.showArticle);
module.exports = router;
