const controller = require("app/http/controllers/controller");
const passport = require("passport");

class loginController extends controller {
  async showFormLogin(req, res, next) {
    try {
      res.render("auth/auth");
    } catch (err) {
      next(err);
    }
  }

  async loginProccess(req, res, next) {
    try {
      if (!result) return this.login(req, res, next);
      return this.backOld(req, res);
    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      passport.authenticate("local.login", {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true,
      })(req, res, next);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new loginController();
