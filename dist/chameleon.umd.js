(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.chameleon = {}));
})(this, (function (exports) { 'use strict';

  class Parser {
    constructor(htmlContent = [], cssContent = []) {
      this.htmlContent = htmlContent;
      this.cssContent = cssContent;
      this.cssObjects = [];

      this.parseHTMLFiles();
      this.parseCSS();

      console.log("good!");
    }

    parseHTMLFiles() {
      for (const content of this.htmlContent) {
        // parse it and extract css
        // this.cssContent.push(extracted)
      }
    }

    parseCSS() {
      for (const content of this.cssContent) {
        // parse the css and store the objects
        //   this.cssObjects.push(cssObj)
      }
    }
  }

  exports.Parser = Parser;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
