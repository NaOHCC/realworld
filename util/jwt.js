const jwt = require("jsonwebtoken");
const { promisify } = require("util");
exports.sign = promisify(jwt.sign);
exports.verify = promisify(jwt.verify);
exports.decode = promisify(jwt.decode);
// 生成
// const token = jwt.sign(
//     {
//         foo: "bar",
//     },
//     "nasdikashfijksbhd",
//     (err, token) => {
//         if (err) {
//             return console.log("生成token失败");
//         }
//         console.log(token);
//     }
// );

// 验证
// jwt.verify(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NDM0NTI5NzJ9.wIeiw-TfejszddTO2Roiwf2omGOduc8W1b5aJua1_Lc",
//     "nasdikashfijksbhd",
//     (err, ret) => {
//         if (err) {
//             return console.log("认证失败");
//         }
//         console.log(ret);
//     }
// );
