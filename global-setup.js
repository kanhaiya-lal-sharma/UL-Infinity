
const { execSync } = require("child_process");

async function globalSetup() {

  execSync("node copy-history.js", { stdio: "inherit" });

}

module.exports = globalSetup;