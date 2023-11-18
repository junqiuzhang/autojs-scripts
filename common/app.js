const Element = require('./element.js');

class App {
  constructor({ appName, packageName, elements }) {
    this.timeout = 5000;
    this.appName = appName;
    this.packageName = packageName;
    elements.forEach((element) => {
      this[element.name] = new Element(element);
    });
  }
  launch = Promise.coroutine(function* () {
    if (
      this.appName &&
      app.launchApp(this.appName) &&
      waitForPackage(this.packageName, this.timeout)
    ) {
      return true;
    }
    if (
      this.packageName &&
      app.launchPackage(this.packageName) &&
      waitForPackage(this.packageName, this.timeout)
    ) {
      return true;
    }
    return false;
  });
}

module.exports = App;
