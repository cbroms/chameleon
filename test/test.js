const fs = require("fs");
const path = require("path");
const { Parser } = require("..");

const html = fs.readFileSync(
  path.join(__dirname, "site1", "index.html"),
  "utf8"
);
const css = fs.readFileSync(
  path.join(__dirname, "site1", "global.css"),
  "utf8"
);

const chameleon = new Parser([html], [css]);
