class errorHandler {
  async error404(req, res, next) {
    try {
      res.statusCode = 404;
      throw new Error("چنین صفحه ای یافت نشد");
    } catch (error) {
      next(error);
    }
  }

  handler(err, req, res, next) {
    const statusCode = err.status || 404; // نوع ارور را دریافت میکرد در صورت نبودن نوع ارور 500 میشود
    const message = err.message || ""; //متن ارور را برمیگرداند
    const stack = err.stack || ""; //ادرس و توضیحات ارور را برمیگرداند

    const layouts = {
      layout: "errors/master",
      extractScripts: false,
      extractStyles: false,
    };

    if (config.debug)
      return res.render("errors/stack", { ...layouts, message, stack });

    return res.render(`errors/${statusCode}`, { ...layouts, message, stack });
  }
}
module.exports = new errorHandler();

// انواع ارور های سایت
// Error 500(internal server error) خطاهای داخلی سرور
// Error 401(unauthorised) غیر مجاز
// Error 400(bad request) درخواست بد
// Error 403(forbiden) ممنوع
// Error 404(not found)پیدا نشد
// Error 501(not implemented) اجرا نشد
// Error 502(service temporarily over loaded)سرویس موقتا بیش از حد بارگیری شده
// Error 503 (service unavaible) سرویس در دسترس نیست
// Error 408(request time-out) درخواست تایم اوت
