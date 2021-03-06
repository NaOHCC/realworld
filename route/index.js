const express = require("express");
const router = express.Router();

router.use(require("./user")); // 用户
router.use("/profiles", require("./profile"));
router.use("/articles", require("./article"));
router.use("tags", require("./tag"));
module.exports = router;
