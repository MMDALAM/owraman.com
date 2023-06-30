const middleware = require("app/http/middleware/middleware");

class adminMiddleware extends middleware {
    handle(req, res, next) {
        if (req.isAuthenticated() && req.user.admin) return next();

        return res.redirect("/");
    }
}

module.exports = new adminMiddleware();
