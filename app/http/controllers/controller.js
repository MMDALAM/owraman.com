const autoBind = require("auto-bind-inheritance");
const { validationResult } = require("express-validator");

module.exports = class controller {
  constructor() {
    autoBind(this);
  }

  async validationData(req) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const errors = result.array();
      const messages = [];

      errors.forEach((err) => messages.push(err.msg));

      req.flash("errors", messages);

      return false;
    }
    return true;
  }

  error(message, status = 404) {
    let err = new Error(message);
    err.status = status;
    throw err;
  }

  back(req, res) {
    req.flash("formData", req.body);
    return res.redirect(req.header("Referer") || "/");
  }

  async alert(req, data) {
    let title = data.title || "",
      message = data.message || "",
      icon = data.icon || "info",
      button = data.button || null,
      timer = data.timer || 2500;

    req.flash("sweetalert", { title, message, icon, button, timer });
  }

  async alertAndBack(req, res, data) {
    this.alert(req, data);
    this.back(req, res);
  }
};
