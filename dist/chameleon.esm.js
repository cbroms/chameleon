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

export { Parser };
