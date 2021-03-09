const routerApp = require("./app.router");
const routerApi = require("./api.router");
var cors = require("cors");
const express = require("express");

exports.init = function (app, basePath) {
  app.use(cors());
  app.use("/app", routerApp);

  app.use("/api", routerApi);

  app.use("/style", express.static(basePath + "/style"));
  app.use("/assets", express.static(basePath + "/assets"));

  app.use("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept",
    );
    res.render("Index");
  });
};
