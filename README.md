# 🚀 UL-Infinity Test Automation Framework

## 📌 Overview

This project is a **scalable End-to-End (E2E) test automation framework** designed for the UL-Infinity web application using **Playwright with JavaScript**.

The framework is built with a strong focus on **maintainability, reusability, and scalability**, following modern automation best practices used in real-world QA environments.

---

## 🧰 Tech Stack

* 🎭 Playwright (JavaScript)
* 📊 Allure Reporting
* 🧱 Page Object Model (POM)
* 🔄 Git & GitHub
* ☁️ Vercel (for report sharing)

---

## 🎯 Key Highlights

* ✅ End-to-End test automation for real user scenarios
* ✅ Page Object Model (POM) architecture for clean code
* ✅ Modular & reusable test components
* ✅ Rich Allure reports with screenshots & execution insights
* ✅ Easy-to-scale test structure
* ✅ CI/CD ready framework

---

## 📂 Project Structure

```bash
UL-Infinity/
│── tests/                # Test cases
│── pages/                # Page Object Model classes
│── allure-results/       # Raw test execution data
│── allure-report/        # Generated HTML reports
│── playwright.config.js  # Configuration file
│── vercel.json           # Deployment config
```

---

## ▶️ Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests with single worker:

```bash
npx playwright test --workers=1
```

Run a specific test:

```bash
npx playwright test tests/<file-name>.spec.js
```

---

## 📊 Reporting (Allure)

Generate report:

```bash
npx allure-commandline generate ./allure-results --clean
```

Open report locally:

```bash
npx allure open
```

---

## 🌐 Live Report

Test reports are deployed on Vercel for easy sharing and accessibility across teams.

---

## 💡 Framework Design Principles

* Clean and readable code structure
* Separation of concerns using POM
* Reusability of components
* Maintainability for long-term scaling
* Real-world test scenario coverage

---

## 🚀 Future Enhancements

* CI/CD integration with GitHub Actions
* Parallel execution optimization
* Cross-browser testing expansion
* Test data management improvements

---

## 👨‍💻 Author

**Kanhaiya Lal Sharma**

---

## ⭐ Why This Project?

This project demonstrates practical experience in:

* Building automation frameworks from scratch
* Writing maintainable and scalable test code
* Implementing reporting and deployment solutions
* Following industry-standard QA practices

---

⭐ Feel free to explore and connect!
