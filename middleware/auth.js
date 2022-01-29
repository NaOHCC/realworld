const { verify } = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");
const { User } = require("../model");
module.exports = async (req, res, next) => {
    // 从请求头获取token数据
    let token = req.headers.authorization;
    // 验证token是否有效
    token = token ? token.split("Bearer ")[1] : null;

    // 无效返回401
    if (!token) {
        return res.status(401).end();
    }
    // 有效, 把用户信息挂载到req上, 继续往后执行
    try {
        const decodeToken = await verify(token, jwtSecret);
        req.user = await User.findById(decodeToken.userId);
        next();
    } catch (err) {
        return res.status(401).end();
    }
};
