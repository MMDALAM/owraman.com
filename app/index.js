const express = require("express");
const app = express();
const http = require("http");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const { body, cookie } = require("express-validator");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const csrfErrorHandler = require("app/http/middleware/csrfErrorHandler");
const helmet = require("helmet");
const Helpers = require("./Helpers");

module.exports = class Application {
  constructor() {
    this.setupExpress();
    this.setMongoConnection();
    this.setConfig();
    this.setRouters();
  }

  setupExpress() {
    const server = http.createServer(app);
    server.listen(3000, () => console.log(`Listening on port 3000`));
  }

  setMongoConnection() {
    try {
      mongoose.Promise = global.Promise;
      mongoose.set("strictQuery", false);
      mongoose.connect(config.database.url);
      mongoose.connection.on("connected", () => {
        console.log("mongoose connected to DB");
      });
      mongoose.connection.on("disconnected", () => {
        console.log("mongoose disconnected");
      });
      process.on("SIGINT", async () => {
        await mongoose.connection.close();
        console.log("disconnected");
        process.exit(0);
      });
    } catch (error) {
      if (error) return console.log("faild to connected to MongoDB");
    }
  }

  setConfig() {
    require("app/passport/passport-local");

    app.enable("trust proxy");
    app.use(helmet());
    app.use(
      helmet({
        contentSecurityPolicy: false,
      })
    );

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(express.static(config.layout.public_dir));
    app.set("view engine", config.layout.view_engine);
    app.set("views", config.layout.view_dir);
    app.use(config.layout.ejs.expressLayouts);
    app.set("layout extractScripts", config.layout.ejs.extractScripts);
    app.set("layout extractStyles", config.layout.ejs.extractStyles);
    app.set("layout", config.layout.ejs.master);
    app.use(flash());
    app.use(cookieParser());
    app.use(
      session({
        name: "owraman",
        secret: "731dc1eb45a96ab288a4a938b22eb4bf",
        saveUninitialized: true,
        cookie: { maxAge: 24 * 60 * 60 * 1000 },
        resave: false,
      })
    );

    app.use(body());

    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req, res, next) => {
      app.locals = new Helpers(req, res).getObjects();
      next();
    });
  }

  setRouters() {
    app.use(csrf({ cookie: true }), require("app/routers/web"));
    app.use(csrfErrorHandler.handle);
  }
};
