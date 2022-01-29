const express = require("express");
const router = express.Router();
const profileCtrl = require("../controller/profile");
// 获取用户资料
router.get("/:username", profileCtrl.getProfile);

// 关注用户
router.post("/:username/follow", profileCtrl.followUser);

// 取消关注用户
router.delete("/:username/follow", profileCtrl.unfollowUser);

module.exports = router;
