const fastglob = require("fast-glob");

module.exports = async function () {
  let results = {};

  let resultFiles = await fastglob("./_data/results-new/**/*.json", {
    caseSensitiveMatch: false
  });

  for (let resultFile of resultFiles) {
    let split = resultFile.split("/");
    let filename = split.pop();
    let hash = split.pop();

    if (!results[hash]) {
      results[hash] = {};
    }

    // Use the filename (without .json) as the key
    let key = filename.replace(/\.json$/, "");
    let resultData = require(`.${resultFile}`);
    results[hash][key] = resultData;
  }

  return results;
};
