module.exports = async (req, res, next) => {
    // 检查有无session user
    const sessionUser = req.session.user;
    if (sessionUser) {
        // 重定向到首页
        // 发出302响应, location /login
        return res.redirect("/");
    }
    next();
};
