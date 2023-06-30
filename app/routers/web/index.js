const experss = require("express");
const router = experss.Router();

//middleware
const errorHandler = require("app/http/middleware/errorHandler");

//home router
const homeRouter = require("./home");
router.use("/", homeRouter);

// //admin router
const adminRouter = require("./admin");
router.use("/admin", adminRouter);

//errorHandler
router.all("*", errorHandler.error404);
router.use(errorHandler.handler);

module.exports = router;
