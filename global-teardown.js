
const { execSync } = require("child_process");
const sendMail = require("./utils/sendMail");

async function globalTeardown() {

  execSync("npx allure generate ./allure-results -o ./allure-report --clean", { stdio: "inherit" });

  execSync("vercel --prod", { stdio: "inherit" });

    await sendMail();


}

module.exports = globalTeardown;