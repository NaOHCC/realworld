const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./route");
const errorhandler = require("errorhandler");
const path = require("path");
const session = require("express-session");
const { sessionSecret, dbUri } = require("./config/config.default");
const MongoStore = require("connect-mongo");
require("./model");

const app = express();

// 使用session中间件
// 存储session: 生成session id; 存储数据(默认存在内存)
// req.session.xxx=xxx
// 获取session: 更加session id 获取session 容器中的数据
// res.session.xxx
app.use(
    session({
        secret: sessionSecret, // 签发session id 密钥
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, // 过期时间
            secure: false, // 只有https协议, 才收发cookie
        }, // 保存session id 的cookie设置
        store: MongoStore.create({
            mongoUrl: dbUri,
        }), // 持久化到MongoDB中
    })
);

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
