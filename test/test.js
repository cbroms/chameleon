const fs = require("fs");
const path = require("path");
const { Parser } = require("..");

const getHTML = (site) => {
  return fs.readFileSync(path.join(__dirname, site, "index.html"), "utf8");
};

const getCSS = (site) => {
  return fs.readFileSync(path.join(__dirname, site, "global.css"), "utf8");
};

const testSite1 = () => {
  const chameleon = new Parser([getHTML("site1")], [getCSS("site1")]);
  chameleon.extractDeclarations();
};

const testSite2 = () => {
  const chameleon = new Parser([getHTML("site2")], [getCSS("site2")]);
  chameleon.extractDeclarations();
};

testSite1();

testSite2();
