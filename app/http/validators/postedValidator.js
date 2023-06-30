const validator = require("./validator");
const { body } = require("express-validator");

class postedValidator extends validator {
  handle() {
    return [
      body("name").not().isEmpty().withMessage(" نام شما نمیتواند خالی بماند"),
      body("email")
        .not()
        .isEmpty()
        .withMessage(" ایمیل شما نمیتواند خالی بماند"),

      body("tel").not().isEmpty().withMessage(" شماره تلفن باید خالی باشد "),

      body("message")
        .not()
        .isEmpty()
        .withMessage("  متن نمیتواند بیشتراز 200 حروف باشد "),
    ];
  }
}

module.exports = new postedValidator();
