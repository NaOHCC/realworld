const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./route");
const errorhandler = require("errorhandler");
const path = require("path");
require("./model");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors());

// API服务
// app.use("/api", router);

app.engine("html", require("express-art-template")); // 渲染art文件
app.set("view options", {
    debug: process.env.NODE_ENV !== "production",
});
app.set("views", path.join(__dirname, "views")); // 模板文件目录
app.set("view engine", "html"); // 提供的文件名可以省略art

app.use("/", router);

// 异常处理
if (process.env.NODE_ENV === "development") {
    // only use in development
    app.use(errorhandler());
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listenning port: ${PORT}`);
});
