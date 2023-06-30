const path = require("path");
const autoBind = require("auto-bind-inheritance");

module.exports = class Helpers {
  constructor(req, res) {
    autoBind(this);
    this.req = req;
    this.res = res;
  }

  getObjects() {
    return {
      auth: this.auth(),
      viewPath: this.viewPath,
      date: this.date,
      ...this.getGlobalVaribales(),
      req: this.req,
    };
  }

  auth() {
    return {
      check: this.req.isAuthenticated(),
      user: this.req.user,
    };
  }

  getGlobalVaribales() {
    return {
      errors: this.req.flash("errors"),
    };
  }

  viewPath(dir) {
    return path.resolve(config.layout.view_dir + "/" + dir);
  }
};
