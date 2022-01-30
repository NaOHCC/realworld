const express = require("express");
const router = express.Router();
const UserCtrl = require("../controller/user");
const userValidator = require("../vaildator/user");
const auth = require("../middleware/auth");

router.get("/login", UserCtrl.showLogin);

router.get("/register", UserCtrl.showRegister);

router.post("/register", UserCtrl.register);

router.get("/settings", UserCtrl.showSettings);

router.get("/profile/:username", UserCtrl.showProfile);

router.get("/profile/:username/favorites", UserCtrl.showProfile);

module.exports = router;
