const express = require("express");
const router = express.Router();
const UserCtrl = require("../controller/user");
const userValidator = require("../vaildator/user");
const auth = require("../middleware/auth");
const noAuth = require("../middleware/no-auth");

router.get("/login", noAuth, UserCtrl.showLogin);
router.post("/login", noAuth, userValidator.login, UserCtrl.login);

router.get("/register", noAuth, UserCtrl.showRegister);

router.get("/logout", UserCtrl.logout);

router.post("/register", userValidator.registe, UserCtrl.register);

router.get("/settings", auth, UserCtrl.showSettings);

router.get("/profile/:username", UserCtrl.showProfile);

router.get("/profile/:username/favorites", UserCtrl.showProfile);

module.exports = router;
