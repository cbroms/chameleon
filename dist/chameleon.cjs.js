'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const HTMLParser = require("node-html-parser");
const csstree = require("css-tree");

class Parser {
  constructor(htmlContent = [], cssContent = [], quiet = false) {
    this.options = { quiet };
    this.htmlContent = htmlContent;
    this.cssContent = cssContent;
    this.cssObjects = [];

    this.setTargetNodes();

    this.parseHTMLFiles();
    this.parseCSS();
  }

  parseHTMLFiles() {
    for (const content of this.htmlContent) {
      try {
        const root = HTMLParser.parse(content);
        const styleTags = root.querySelectorAll("style");
        for (const style of styleTags) {
          this.cssContent.push(style.text);
        }
      } catch (err) {
        if (!this.options.quiet)
          throw new Error("Chameleon Error: Could not parse HTML");
        continue;
      }
    }
  }

  parseCSS() {
    for (const content of this.cssContent) {
      try {
        const ast = csstree.parse(content);
        this.cssObjects.push(ast);
      } catch (err) {
        if (!this.options.quiet)
          throw new Error("Chameleon Error: Could not parse CSS");
        continue;
      }
    }
  }

  setTargetNodes(
    nodes = [
      "border",
      "background-color",
      "border-radius",
      "box-shadow",
      "color",
    ]
  ) {
    this.targetNodes = nodes;
  }

  extractDeclarations() {
    for (const astObj of this.cssObjects) {
      var colorDeclarations = csstree.findAll(astObj, (node, item, list) => {
        return node.type === "Declaration" && node.property === "color";
      });

      console.log(colorDeclarations);

      // csstree.walk(astObj, {
      //   enter(node) {
      //     console.log(`enter ${node.type}`);
      //   },
      //   leave(node) {
      //     console.log(`leave ${node.type}`);
      //   },
      // });
    }
  }
}

exports.Parser = Parser;
