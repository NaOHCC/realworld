const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./route");
const errorHandler = require("./middleware/errorHandler");
require("./model");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api", router);

// 异常处理
app.use(errorHandler());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listenning port: ${PORT}`);
});
