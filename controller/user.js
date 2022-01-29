const { User } = require("../model");

exports.login = async (req, res, next) => {
    try {
        // 1.数据验证
        // 2.生成token
        // 3.发送响应
        res.send("post /users/login");
    } catch (err) {
        next(err);
    }
};
exports.registe = async (req, res, next) => {
    try {
        // 获取请求体数据
        console.log(req.body);
        // 数据验证
        // 基本数据验证
        // 业务数据验证
        // 验证通过, 保存到数据库
        let user = new User(req.body.user);
        // 保存到数据库
        await user.save();

        // 发送成功响应
        user = user.toJSON();
        delete user.password;
        res.status(201).json({
            user,
        });
    } catch (err) {
        next(err);
    }
};
exports.getCurrentUser = async (req, res, next) => {
    try {
        res.send("get /user");
    } catch (err) {
        next(err);
    }
};
exports.updateUser = async (req, res, next) => {
    try {
        res.send("put /user");
    } catch (err) {
        next(err);
    }
};
