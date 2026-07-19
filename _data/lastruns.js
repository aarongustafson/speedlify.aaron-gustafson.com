// Nunjucks workaround for dashes in global `results-last-runs-new.json` variable name

let lastruns = {};

try {
  lastruns = require("./results-last-runs-new.json");
} catch (e) {
}

module.exports = lastruns;