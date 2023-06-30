const experss = require("express");
const router = experss.Router();

//controllers
const adminController = require("app/http/controllers/admin/adminController");

//validators
const loginValidator = require("app/http/validators/loginValidator");

//middleware
const notAdminMiddleware = require("app/http/middleware/notAdminMiddleware");

router.get("/auth", adminController.login);
router.post("/auth", loginValidator.handle(), adminController.loginProccess);

//master page
router.use((req, res, next) => {
  res.locals.layout = "admin/master";
  next();
});
router.post("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
//admin Rouer
router.get("/owraman", notAdminMiddleware.handle, adminController.index);
router.post("/seen/:id", notAdminMiddleware.handle, adminController.seen);
router.post("/delete/:id", notAdminMiddleware.handle, adminController.delete);

module.exports = router;
