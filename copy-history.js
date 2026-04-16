
const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "allure-report/history");
const destination = path.join(__dirname, "allure-results/history");

if (fs.existsSync(source)) {
  fs.rmSync(destination, { recursive: true, force: true });
  fs.cpSync(source, destination, { recursive: true });
  console.log("History copied");
} else {
  console.log("No previous history found");
}