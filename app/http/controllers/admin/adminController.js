const controller = require("app/http/controllers/controller");
const Posted = require("app/models/posted");
const passport = require("passport");

class homeController extends controller {
  async index(req, res, next) {
    try {
      let page = req.query.page || 1;
      let posteds = await Posted.paginate(
        {},
        {
          page,
          sort: { number: 1 },
          limit: 12,
        }
      );
      res.render("admin/index", { posteds });
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const posted = await Posted.findById(req.params.id);

      await posted.remove();
      return this.back(req, res);
    } catch (err) {
      next(err);
    }
  }

  async seen(req, res, next) {
    try {
      await Posted.findByIdAndUpdate(req.params.id, {
        $set: { seen: true },
      });
      return this.back(req, res);
    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      res.render("auth/register");
    } catch (err) {
      next(err);
    }
  }

  async loginProccess(req, res, next) {
    try {
      let result = await this.validationData(req);
      if (result) return this.log(req, res, next);
      return this.back(req, res);
    } catch (err) {
      next(err);
    }
  }

  async log(req, res, next) {
    try {
      passport.authenticate("local.login", {
        successRedirect: "/admin/owraman",
        failureRedirect: "/admin/auth",
        failureFlash: true,
      })(req, res, next);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new homeController();
