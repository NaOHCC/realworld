exports.showLogin = async (req, res, next) => {
    try {
        res.render("login", {
            isLogin: true,
        });
    } catch (err) {
        next(err);
    }
};
exports.showRegister = async (req, res, next) => {
    try {
        res.render("login");
    } catch (err) {
        next(err);
    }
};

exports.register = async (req, res, next) => {
    try {
        console.log(req.body);
        // 数据验证
        // 验证通过, 创建新用户
        // 保持登录状态
        // 跳转到首页
        res.send("post");
    } catch (err) {
        next(err);
    }
};

exports.showSettings = async (req, res, next) => {
    try {
        res.render("profile");
    } catch (err) {
        next(err);
    }
};
exports.showProfile = async (req, res, next) => {
    try {
        res.render("profile");
    } catch (err) {
        next(err);
    }
};
