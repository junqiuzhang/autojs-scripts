const Element = require('./element.js');
const { waitForReTry } = require('./utils.js');

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
    if (app.launchApp(this.appName)) {
      waitForPackage(this.packageName, this.timeout);
      return true;
    }
    if (app.launchPackage(this.packageName)) {
      waitForPackage(this.packageName, this.timeout);
      return true;
    }
    return false;
  }
  waitForLaunch = Promise.coroutine(function* () {
    return waitForReTry(
      (resolve, reject) => (this.launch() ? resolve(true) : reject(false)),
      1000
    )
      .then(() => {
        console.log(`${this.appName} launched`);
        return true;
      })
      .catch(() => false);
  });
}

module.exports = App;
