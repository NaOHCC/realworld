const validate = require("../middleware/validate");
const { body } = require("express-validator");
const { User } = require("../model");
const md5 = require("../util/md5");
exports.registe = validate([
    // 配置验证规则
    body("user.username")
        .notEmpty()
        .withMessage("用户名不能为空")
        .custom(async (username) => {
            const user = await User.findOne({ username });
            if (user) {
                return Promise.reject("用户名已存在");
            }
        }),

    body("user.password").notEmpty().withMessage("密码不能为空"),

    body("user.email")
        .notEmpty()
        .withMessage("邮箱不能为空")
        .isEmail()
        .withMessage("邮箱格式不正确")
        .bail()
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (user) {
                return Promise.reject("邮箱已存在");
            }
        }),
]);

exports.login = [
    validate([
        body("user.email").notEmpty().withMessage("邮箱不能为空"),
        body("user.password").notEmpty().withMessage("密码不能为空"),
    ]),
    validate([
        body("user.email").custom(async (email, { req }) => {
            const user = await User.findOne({ email }).select([
                "email",
                "username",
                "bio",
                "image",
                "password",
            ]);
            if (!user) {
                return Promise.reject("用户名不存在");
            }
            // 挂载到req上
            req.user = user;
        }),
    ]),
    validate([
        body("user.password").custom(async (password, { req }) => {
            if (md5(password) !== req.user.password)
                return Promise.reject("密码错误");
        }),
    ]),
];
