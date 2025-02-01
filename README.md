# ITUS Next.js Project

Welcome to the ITUS Next.js project! This document will guide you through setting up the development environment, installing necessary packages, and adhering to the project's code quality and commit standards.

## Prerequisites

Ensure you have the following installed:

- **Node.js** version 14.0.0 or higher
- **npm** version 7.0.0 or higher (preferred over Yarn)

To check the version of Node.js and npm, run:

```bash
node -v
npm -v
```

````

If you don't have these installed, please follow the installation instructions for [Node.js](https://nodejs.org/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Installation Steps

1. Clone the Repository
   Clone the project repository from GitHub to your local machine:

   ```bash
   git clone https://github.com/hamidzzabdul/itus-next.git
   cd itus-next
   ```

2. Install Dependencies
   Install all the required packages by running:

   ```bash
   npm install
   ```

   This will install both dependencies and devDependencies as specified in the `package.json` file.

3. Set Up Husky (Git Hooks)
   Husky is used for managing Git hooks in this project, and it has been configured to run linting and commit checks automatically.

   After installing dependencies, Husky will automatically be set up.

4. Configure Pre-commit Hook
   Husky is set up with `lint-staged` to run linters (ESLint, Prettier) on staged files before committing.

   Ensure that you stage your changes before committing them to trigger the pre-commit hook.

## Project Scripts

Here are the key scripts available to run in the project:

- `npm run dev`: Starts the development server with Turbopack (for faster builds). Use this for local development.

- `npm run build`: Builds the project for production.

- `npm run start`: Starts the production server after building the project.

- `npm run lint`: Runs ESLint to check for linting errors in the code.

- `npm run prepare`: Runs Husky's setup script to ensure Git hooks are configured correctly.

## Commit Guidelines

To maintain a clean and consistent commit history, follow the [Conventional Commit](https://www.conventionalcommits.org/) specification. This includes using specific commit types and formats for your commit messages.

### Commit Message Format:

Commit messages should be formatted as follows:

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Commit Types:

- build: Changes related to the build system or external dependencies.
- ci: Changes to CI configuration files and scripts.
- docs: Documentation-only changes.
- feat: New feature.
- fix: Bug fix.
- perf: Code changes that improve performance.
- refactor: Code change that neither fixes a bug nor adds a feature.
- style: Changes that do not affect the meaning of the code (e.g., formatting, missing semi-colons).
- test: Adding or correcting tests.
- translation: Translation changes.
- security: Security fixes.
- chore: Other non-feature-related changes (e.g., updating dependencies).

#### Example:

```
feat(auth): add login page
```

### Commit Message Rules:

- Subject line: Keep the subject line under 100 characters. Use imperative mood (e.g., "Add", "Fix", "Remove").
- Body: Provide more details in the body if necessary. Wrap text at 100 characters per line.
- Footer: Add a footer if needed (e.g., breaking changes or references to issues).

### Linting:

- ESLint: Ensures code quality by checking for common errors and enforcing coding standards.
- Prettier: Formats code automatically according to consistent style rules.

### Git Hooks:

- Pre-commit hook: Lint and format the code before each commit using `lint-staged`.
- Commit message validation: `commitlint` ensures your commit messages follow the proper format.

## How to Commit Changes

1. Stage your changes:
   Add the files you want to commit using `git add`.

   ```bash
   git add .
   ```

2. Commit your changes:
   Commit your staged changes with a properly formatted message.

   ```bash
   git commit -m "feat(auth): add login page"
   ```

3. Push your changes:
   Push your commits to the repository under a new branch.

   ```bash
   git push
   ```

## Code Quality and Guidelines

- Follow ESLint and Prettier rules: Always run `npm run lint` to check for linting errors.
- Commit only finished work: Ensure your commits represent logical, complete changes. Use smaller commits to make review easier.
- Avoid committing secrets: Do not commit API keys, passwords, or any sensitive data. Use `.env` files to store configuration securely.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [ESLint Documentation](https://eslint.org/docs/)
- [Prettier Documentation](https://prettier.io/docs/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [Commitlint Documentation](https://commitlint.js.org/)

---

```

### Explanation of Sections:
- Installation: Instructions for setting up the environment and installing dependencies.
- Scripts: Descriptions of available npm scripts that help with development.
- Commit Guidelines: Explanation of the commit message format and rules, including the types of commits.
- Git Hooks: Overview of Husky and how it's integrated into the project for pre-commit linting and commit message validation.
- Code Quality: Guidelines to follow when writing and committing code to maintain quality.
````
