const express = require("express");
const chalk = require("chalk");
const router = require("./routers/router");
const config = require("./config");
const app = express();

//Views React
app.engine("jsx", require("express-react-views").createEngine());
app.set("views", __dirname + "/views/");
app.set("view engine", "jsx");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});
router.init(app, __dirname);

app.listen(config.db.port, function () {
  console.log(chalk.blue("app listening on port"), config.db.port);
});
