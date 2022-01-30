module.exports = async (req, res, next) => {
    // 检查有无session user
    const sessionUser = req.session.user;
    if (sessionUser) {
        return next();
    }
    // 重定向到登录页
    // 发出302响应, location /login
    res.redirect("/login");
};
