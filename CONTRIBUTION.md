# Contributing to IEEE PESU Student Branch Website 💙

First off, thank you for considering contributing to the IEEE PESU Student Branch website! Every contribution, whether it's a bug fix, a new feature, a design tweak, or a typo correction, helps make our club's home on the web better.

Please take a few minutes to read through these guidelines before you get started.

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [Getting Started](#-getting-started)
- [Setting Up the Development Environment](#-setting-up-the-development-environment)
- [Opening an Issue](#-opening-an-issue)
- [Making Changes](#-making-changes)
- [Commit Message Guidelines](#-commit-message-guidelines)
- [Submitting a Pull Request](#-submitting-a-pull-request)
- [Coding Guidelines](#-coding-guidelines)
- [Need Help?](#-need-help)

## 🤝 Code of Conduct

Be respectful, patient, and welcoming to everyone. Harassment, discrimination, or rude behavior of any kind will not be tolerated. We're all here to learn and build together.

## 🚀 Getting Started

1. **Fork** this repository using the *Fork* button at the top right.
2. **Clone** your fork to your local machine:

```bash
   git clone https://github.com/<your-username>/IEEE_Weebsite.git
   cd IEEE_Weebsite
```

3. **Add the original repo as `upstream`** so you can stay in sync:

```bash
   git remote add upstream https://github.com/IEEE-PESIT-Student-Branch/IEEE_Weebsite.git
```

## 🛠️ Setting Up the Development Environment

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm (comes with Node.js)
- Git

### Installation

1. Install dependencies:

```bash
   npm install
```

2. Start the development server:

```bash
   npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser. The page reloads automatically when you save changes.

### Tech Stack

- **React** for the UI
- **React Router** for client-side routing

> 💡 If you add a new page, remember to register its route in the router configuration.

## 🐛 Opening an Issue

Found a bug or have an idea? Please open an issue **before** starting work on a large change.

1. Go to the [Issues tab](https://github.com/IEEE-PESIT-Student-Branch/IEEE_Weebsite/issues).
2. **Search existing issues** first to avoid duplicates.
3. Click **New Issue** and pick the appropriate type.
4. Use a clear, descriptive title.

### For Bug Reports, include:

- A clear description of the problem
- Steps to reproduce it
- Expected vs. actual behavior
- Screenshots (if applicable)
- Browser and OS details

### For Feature Requests, include:

- What you'd like to see added or changed
- Why it would be useful
- Any mockups or references

Wait for a maintainer to review and assign the issue to you before you start working on it. This avoids duplicated effort.

## 🌿 Making Changes

> ⚠️ **Never push directly to `main`.** Always work on a separate branch.

1. Sync your fork with upstream:

```bash
   git checkout main
   git pull upstream main
```

2. Create a new branch with a descriptive name:

```bash
   git checkout -b <type>/<short-description>
```

   Examples:
   - `feature/add-events-page`
   - `fix/navbar-mobile-overflow`
   - `docs/update-readme`

3. Make your changes and test them locally.
4. Stage and commit:

```bash
   git add .
   git commit -m "feat: add events page"
```

5. Push the branch to **your fork**:

```bash
   git push origin <your-branch-name>
```

## ✍️ Commit Message Guidelines

Keep commits small, focused, and meaningful. We follow a simple convention:

| Prefix      | Use for                                   |
| ----------- | ----------------------------------------- |
| `feat:`     | A new feature                             |
| `fix:`      | A bug fix                                 |
| `docs:`     | Documentation changes                     |
| `style:`    | Formatting or CSS changes (no logic)      |
| `refactor:` | Code restructuring without behavior change |
| `chore:`    | Config, dependencies, or maintenance      |

Example: `fix: resolve footer alignment on small screens`

## 🔁 Submitting a Pull Request

1. Make sure your branch is up to date with upstream `main`.
2. Confirm the project builds and runs without errors:

```bash
   npm run build
```

3. Go to your fork on GitHub and click **Compare & pull request**.
4. Set the base repository to `IEEE-PESIT-Student-Branch/IEEE_Weebsite` and the base branch to `main`.
5. Fill in the PR with:
   - A clear title and description of what you changed and why
   - A link to the related issue (e.g. `Closes #12`)
   - Screenshots or a screen recording for any UI changes
6. Submit and wait for a review. Be open to feedback, and push follow-up commits to the same branch if changes are requested.

### PR Checklist

- [ ] I created a separate branch (not `main`)
- [ ] My code runs locally without errors or warnings
- [ ] I tested my changes on both desktop and mobile view
- [ ] I linked the related issue
- [ ] I haven't committed `node_modules`, `.env` files, or other unnecessary files

## 🎨 Coding Guidelines

- Use **functional components** and React Hooks.
- Keep components small, reusable, and placed in the appropriate folder.
- Use clear, meaningful names for components, variables, and files (components in `PascalCase`, variables and functions in `camelCase`).
- Keep the site **responsive** and check layouts on different screen sizes.
- Optimize images before adding them to the repo.
- Don't leave unused imports, commented-out code, or `console.log` statements.
- Don't add new dependencies without discussing it in an issue first.

## 💬 Need Help?

Stuck or unsure where to begin? Open an issue with your question, or reach out to the IEEE PESU Student Branch team.

Thank you for helping us build something great! 🎉

**Happy coding!**
*Team IEEE PESU Student Branch*