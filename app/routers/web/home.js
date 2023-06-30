const experss = require("express");
const router = experss.Router();

//controllers
const homeController = require("app/http/controllers/homeController");
const loginController = require("app/http/controllers/auth/loginController");

//validators
const postedValidator = require("app/http/validators/postedValidator");
const loginValidator = require("app/http/validators/loginValidator");

//home Rouer
router.get("/", homeController.index);

//posted
router.get("/request", homeController.request);
router.post("/posted", postedValidator.handle(), homeController.posted);

module.exports = router;
