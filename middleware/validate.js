const { validationResult, buildCheckFunction } = require("express-validator");
const { isValidObjectId } = require("mongoose");
// can be reused by many routes

// parallel processing
exports = module.exports = (validations) => {
    // 判断验证结果
    return async (req, res, next) => {
        await Promise.all(validations.map((validation) => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({ errors: errors.array() });
    };
};

// https://express-validator.github.io/docs/check-api.html#buildcheckfunctionlocations
// 动态位置验证
exports.isValidObjectId = (location, fields) => {
    return buildCheckFunction(location)(fields).custom(async (value) => {
        if (!isValidObjectId(value)) {
            return Promise.reject("文章ID错误");
        }
    });
};
