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
        res.render("login", {
            errors: ["不能为空"],
        });
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
