const express = require("express");
const router = express.Router();
const UserCtrl = require("../controller/user");
const userValidator = require("../vaildator/user");
const auth = require("../middleware/auth");
// 用户登录
router.post("/users/login", userValidator.login, UserCtrl.login);

// 用户注册
router.post("/users", userValidator.registe, UserCtrl.registe);

// 获取当前登录用户
router.get("/user", auth, UserCtrl.getCurrentUser);

// 更新当前用户
router.put("/user", auth, UserCtrl.updateUser);

module.exports = router;
