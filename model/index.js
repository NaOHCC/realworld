const mongoose = require("mongoose");
const { dbUri } = require("../config/config.default");
mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
    console.log("连接失败", err);
});

db.once("open", () => {
    console.log("连接成功");
});

// 组织导出模型类
module.exports = {
    User: mongoose.model("User", require("./user")),
    Article: mongoose.model("Article", require("./article")),
};
