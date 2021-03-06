const request = require("../services/backRequest.services");
const config = require("../config");

exports.search = (req, res, next) => {
  const options = getOptions(
    `/api/search?q=${encodeURIComponent(req.query.q)}`,
  );
  request(options)
    .then((data) => {
      data.query = req.query.q;
      res.render("Search", data);
    })
    .catch(next);
};

exports.items = (req, res, next) => {
  const options = getOptions("/api/items/" + req.params.id);
  request(options)
    .then((item) => {
      res.render("Item", item);
    })
    .catch(next);
};

function getOptions(path) {
  return {
    method: "GET",
    headers: { "Content-type": "application/json" },
    hostname: config.db.host,
    port: config.db.port,
    protocol: "http",
    path: path,
  };
}
