# Project Testing Setup

## 📌 Project Overview

This project includes unit testing with **Vitest** and end-to-end (E2E) testing with **Playwright**, ensuring that key functionalities work correctly. Additionally, **ESLint** and **Prettier** are set up for consistant code formatting and linting.

## 🚀 Setup Instructions

### 1️⃣ Install Dependencies

Before running any tests, install required dependencies:

```sh
npm install
```

### 2️⃣ Environment Variables

Create a `.env` file in the root directory and define the following environment variables:

```
TEST_USER_EMAIL=your_test_email@example.com
TEST_USER_PASSWORD=your_test_password
```

Ensure that `.env` is **excluded from Git** by adding it to `.gitignore.` Instead, include `.env.example` file with placeholder values.

## 🛠 Development Tools

### ESLint & Prettier setup

- **ESLint** is configured to handle global variables used in the test files.
- **Prettier** ensures consistent code formatting.
- **Commit hooks** enforce linting and formatting before commits.

### Run ESLint manually:

```
npm run lint
```

### Run Prettier to Format Code:

```
npm run format
```

### Commit Hooks (Husky & Lint-Staged)

- Husky runs **lint-staged** on staged files before committing.
- JavaScript files are linted and formatted before commit.
- HTML, JSON, and CSS files are formatted automatically.

## ✅ Testing Setup

### 1️⃣ Unit Testing with Vitest

Vitest is used to test individual functions.

**Run all unit tests:**

```
npm run test:unit:
```

**Test Cases Implemented:**
**isActivePath function**

- ✅ Returns `true` when `currentPath` matches `href` exactly.
- ✅ Returns `true` for root path (`"/"`) when patch is `"/"` or `"/index.html"`.
- ✅ Returns `true` when `currentPath` includes the `href`.
- ✅ Returns `false` when paths don't match.

**getUserName function**
**storage.test.js** file name.

- ✅ Returns the username from local storage if it exists.
- ✅ Returns `null` when no user exists in storage.

### 2️⃣ End-to-End Testing with Playwright

Playwright tests ensure critical workflows function correctly.
**Run all E2E tests:**

```
npm run test:e2e:
```

### **Test Cases Implemented:**

### **Login Tests**

- ✅ User can successfully log in with **valid credentials**
- ✅ User sees an **error message** when using **invalid credentials**

### **Navigation Tests**

- ✅ User can navigate to the **home page**.
- ✅ The venue list loads correctly.
- ✅ Clicking the first venue navigates to the venue details page.
- ✅ The venue details page displays the heading "**Venue details**".

## Additional Scripts

### Run All Tests (Unit + E2E):

```
npm test
```

### Run Playwright UI Mode for Debugging:

```
npx playwright test --ui
```

## 🔥 Final Notes

- Ensure `.env` is not committed to Git by adding it to `.gitignore`.
