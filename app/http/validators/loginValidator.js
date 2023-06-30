const validator = require("./validator");
const { body } = require("express-validator");

class loginValidator extends validator {
    handle() {
        return [body("email").isEmail().withMessage("فیلد ایمیل معتبر نیست"), body("password").isLength({ min: 5 }).withMessage(" رمز عبور نمی تواند کمتر از 5 حرف باشد")];
    }
}

module.exports = new loginValidator();
