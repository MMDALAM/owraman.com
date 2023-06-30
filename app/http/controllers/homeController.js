const controller = require("app/http/controllers/controller");
const Posted = require("app/models/posted");

class homeController extends controller {
  async index(req, res, next) {
    try {
      res.render("home/index");
    } catch (err) {
      next(err);
    }
  }

  async request(req, res, next) {
    try {
      res.render("home/request");
    } catch (err) {
      next(err);
    }
  }

  async posted(req, res, next) {
    try {
      let result = await this.validationData(req);
      if (!result) {
        return this.alertAndBack(req, res, {
          title: " دقت کنید ",
          message:
            " لطفا فیلد درخواست را مجدد بررسی کنید همه موارد را لازم است",
          button: "ارسال مجدد",
          icon: "error",
        });
      }

      const posteds = await Posted.findOne(
        { tel: req.body.tel } || { email: req.body.email }
      ).sort({ createdAt: -1 });

      if (posteds) {
        if (posteds.seen === false) {
          return this.alertAndBack(req, res, {
            title: "دقت کنید",
            message:
              " درخواست قبلی شما در حال بررسی است لطفا منتظر تماس کارشناسان ما باشید",
            button: " بسیار خب ",
            icon: "error",
          });
        }
      }

      let newPosted = new Posted({
        name: req.body.name,
        email: req.body.email,
        tel: req.body.tel,
        message: req.body.message,
      });

      try {
        await newPosted.save();
        return this.alertAndBack(req, res, {
          title: " تبریک ",
          message:
            " در خواست شما با موفقیت ارسال شد لطفا منتظر تماس کارشناسان ما باشید ",
          button: " بسیار خب ",
          icon: "success",
        });
      } catch (err) {
        next(err);
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new homeController();
