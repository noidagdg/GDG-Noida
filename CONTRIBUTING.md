# Contributing to GDG Noida Landing Page

Thank you for your interest in contributing to the GDG Noida Landing Page! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)

## 📜 Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## 🚀 Getting Started

1. **Fork the repository**

2. **Clone your fork**

```bash
git clone https://github.com/your-username/gdg-noida-landing.git
cd gdg-noida-landing
```

3. **Create a branch**

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

4. **Install dependencies**

```bash
npm install
```

5. **Make your changes**

6. **Test your changes**

```bash
npm run dev
npm run build
npm run lint
```

## 💻 Development Process

### Before You Start

- Check existing [issues](https://github.com/your-username/gdg-noida-landing/issues) to see if your idea is already being worked on
- For major changes, open an issue first to discuss the approach
- For small fixes (typos, formatting), feel free to submit a PR directly

### Making Changes

1. **Follow the existing code style**
   - Use 2 space indentation
   - Use double quotes for strings
   - Use semicolons at the end of statements
   - Follow TypeScript best practices

2. **Write clean, readable code**
   - Use descriptive variable names
   - Add comments for complex logic
   - Keep functions focused and small

3. **Test your changes**
   - Ensure the app runs without errors
   - Test responsive design on different screen sizes
   - Check browser compatibility

## 📐 Coding Standards

### TypeScript

- Use strict type checking
- Define interfaces for component props
- Use type inference where possible, but be explicit for public APIs
- Avoid `any` types

### React

- Use functional components
- Follow React 19 best practices
- Minimize `use client` directives (prefer Server Components)
- Use hooks correctly (Rules of Hooks)
- Implement proper error handling

### Styling

- Use Tailwind CSS utility classes
- Use the `cn()` utility for conditional classes
- Follow mobile-first responsive design
- Maintain consistent spacing and typography

### File Structure

- Use lowercase with dashes for directories
- Use PascalCase for components
- Use camelCase for functions and variables
- Default exports for components, named exports for utilities

## 📝 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Commit Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Commit Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Examples

```
feat(hero): add animated background effect

Implemented a new animated background using Framer Motion
to enhance the visual appeal of the hero section.

Closes #123
```

```
fix(navbar): resolve mobile menu closing issue

Fixed bug where mobile menu wouldn't close when clicking
outside the menu area.

Fixes #456
```

## 🔄 Pull Request Process

1. **Update your fork**

```bash
git fetch upstream
git rebase upstream/main
```

2. **Ensure your code passes all checks**
   - Linting: `npm run lint`
   - Build: `npm run build`
   - No TypeScript errors

3. **Write a clear PR description**
   - What changes were made
   - Why the changes were needed
   - How to test the changes
   - Screenshots (if UI changes)

4. **Link related issues**

   - Use keywords like "Closes #123" or "Fixes #456" in your PR description

5. **Request review**

   - Tag relevant maintainers
   - Be responsive to feedback
   - Make requested changes promptly

### PR Checklist

- [ ] Code follows the project's coding standards
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated (if needed)
- [ ] No new warnings or errors
- [ ] Changes tested locally
- [ ] Responsive design verified
- [ ] Accessibility considered

## 🐛 Reporting Issues

### Before Reporting

- Check if the issue already exists
- Ensure you're using the latest version
- Try to reproduce the issue consistently

### Bug Report Template

When reporting a bug, please include:

- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Screenshots**: If applicable
- **Environment**:
  - OS and version
  - Browser and version
  - Node.js version
- **Additional Context**: Any other relevant information

### Feature Request Template

When suggesting a feature, please include:

- **Description**: Clear description of the feature
- **Use Case**: Why this feature would be useful
- **Proposed Solution**: How you envision it working
- **Alternatives**: Other solutions you've considered
- **Additional Context**: Any other relevant information

## 🎯 Areas for Contribution

We welcome contributions in these areas:

- **Bug Fixes**: Fix existing issues
- **New Features**: Add new sections or functionality
- **UI/UX Improvements**: Enhance design and user experience
- **Performance**: Optimize loading times and animations
- **Accessibility**: Improve a11y compliance
- **Documentation**: Improve README, code comments, etc.
- **Testing**: Add tests for components and utilities

## ❓ Questions?

If you have questions or need help:

- Open a [discussion](https://github.com/your-username/gdg-noida-landing/discussions)
- Check existing issues and PRs
- Reach out to maintainers

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort!

---

Happy coding! 🚀

