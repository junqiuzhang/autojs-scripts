const Element = require('./element.js');
const { waitFor } = require('./utils.js');

class App {
  constructor(options) {
    this.timeout = 5000;
    for (const [prop, value] of Object.entries(options)) {
      if (value) {
        this[prop] = value;
      }
    }
    this.initialize();
  }
  initialize() {
    for (const element of this.elements) {
      this[element.name] = new Element(element);
    }
  }
  launch() {
    if (this.packageName) {
      return app.launchPackage(this.packageName);
    }
    return false;
  }
  waitForLaunch() {
    return waitFor((resolve) => {
      console.log(`launching ${this.appName}`);
      if (this.launch()) {
        waitForPackage(this.packageName, this.timeout);
        console.log(`${this.appName} launched`);
        resolve(true);
      }
    }, this.timeout);
  }
}

module.exports = App;
