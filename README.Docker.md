Here’s a simplified version of your `README.md`:

---

# ITUS Next.js Project

Welcome to the ITUS Next.js project! This guide will walk you through setting up your development environment, installing necessary packages, and following the project's coding and commit standards.

## Prerequisites

Make sure you have the following installed:

- **Node.js** version 14.0.0 or higher
- **npm** version 7.0.0 or higher

To check your versions, run:

```bash
node -v
npm -v
```

If not installed, follow these instructions for [Node.js](https://nodejs.org/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Installation

1. **Clone the Repository**  
   Clone the project to your local machine:

   ```bash
   git clone https://github.com/your-username/itus-next.git
   cd itus-next
   ```

2. **Install Dependencies**  
   Install required packages:

   ```bash
   npm install
   ```

3. **Set Up Husky (Git Hooks)**  
   Husky manages Git hooks for automatic linting and commit checks. It will be set up automatically after dependencies are installed.

4. **Configure Pre-commit Hook**  
   Husky uses `lint-staged` to run linters (ESLint, Prettier) on staged files before committing. Stage your changes to trigger the hook.

## Scripts

Here are the key scripts you can run:

- **`npm run dev`**: Start the development server (with **Turbopack** for faster builds).
- **`npm run build`**: Build the project for production.
- **`npm run start`**: Start the production server after build.
- **`npm run lint`**: Run ESLint to check for errors.
- **`npm run prepare`**: Ensure Git hooks are set up correctly.

## Commit Guidelines

Follow the [Conventional Commit](https://www.conventionalcommits.org/) format for commit messages:

### Format:

```
<type>(<scope>): <subject>
```

### Types:

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation change
- **style**: Code formatting
- **test**: Add or fix tests
- **chore**: Maintenance tasks

Example:

```
feat(auth): add login page
```

### Commit Message Rules:

- **Subject**: Under **100 characters**, use **imperative mood** (e.g., "Add", "Fix").
- **Body**: Optional, wrap text at **100 characters** per line.
- **Footer**: Add only if needed (e.g., breaking changes).

## How to Commit

1. **Stage your changes**:

   ```bash
   git add .
   ```

2. **Commit your changes**:

   ```bash
   git commit -m "feat(auth): add login page"
   ```

3. **Push your changes**:

   ```bash
   git push
   ```

## Code Quality and Guidelines

- Follow **ESLint** and **Prettier** rules. Run `npm run lint` to check for errors.
- **Commit only finished work** and prefer smaller, logical commits.
- **Don't commit secrets**. Use `.env` files for sensitive data.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [ESLint Documentation](https://eslint.org/docs/)
- [Prettier Documentation](https://prettier.io/docs/)

---

This version is more concise while still maintaining essential setup and coding instructions.
