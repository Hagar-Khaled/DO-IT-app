# Contributing to DO IT. - Goal Tracker

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive in all interactions.

## Getting Started

1. **Fork** the repository
2. **Clone** your fork locally
   ```bash
   git clone https://github.com/YOUR_USERNAME/todo-app.git
   cd todo-app
   ```
3. **Create a new branch** for your feature
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Install dependencies**
   ```bash
   npm install
   ```

## Development

### Running the app locally

```bash
# Start development server
npm start

# Run on web
npm run web

# Run on iOS
npm run ios

# Run on Android
npm run android
```

### Code Quality

Before submitting a PR, please ensure:

```bash
# Lint your code
npm run lint

# Check types
npx tsc --noEmit
```

## Making Changes

### Guidelines

- Write clear, descriptive commit messages
- Keep commits atomic (one feature per commit)
- Update documentation if you change functionality
- Add comments for complex logic
- Follow existing code style

### File Structure

- **components/** - Reusable UI components
- **hooks/** - Custom React hooks
- **constants/** - App constants and configuration
- **app/** - Screen components and routing

## Submitting Changes

1. **Push** your branch to your fork
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request** on GitHub with:
   - Clear title describing the change
   - Description of what you changed and why
   - Reference to any related issues (#123)

3. **Wait for review** - maintainers will review and provide feedback

## Pull Request Guidelines

- Keep PRs focused on a single feature/fix
- Write descriptive commit messages
- Include screenshots if UI changes
- Update README if adding new features
- Ensure all tests pass

## Reporting Issues

Found a bug? Please:

1. Check if it's already reported in **Issues**
2. If not, create a new issue with:
   - Clear title
   - Description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Your environment (OS, Node version, etc.)

### Example Issue Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable, add screenshots

**Environment**
- OS: [e.g. Windows 10]
- Node version: [e.g. 18.0.0]
- App version: [e.g. 1.0.0]
```

## Feature Requests

Have an idea? We'd love to hear it!

1. Go to **Issues** → **New Issue**
2. Select "Feature request"
3. Describe your idea:
   - What feature?
   - Why is it needed?
   - How should it work?

## Development Tips

### Useful Commands

```bash
# Run linter
npm run lint

# Check types
npx tsc --noEmit

# Reset project to clean state
npm run reset-project

# View app structure
tree -L 2 app/
```

### Best Practices

#### State Management
- Use `useState` for local component state
- Lift state up if sharing between components
- Consider context API for complex state

#### Performance
- Memoize components using `React.memo` if needed
- Use `useCallback` for event handlers
- Avoid unnecessary re-renders

#### Testing
- Test locally on multiple platforms (web, iOS, Android)
- Check responsive design
- Test edge cases (empty list, long text, etc.)

### TypeScript

- Define types for props
- Use `React.FC<Props>` for function components
- Export types for reusable components

```typescript
interface GoalItemProps {
  id: number;
  text: string;
  done: boolean;
  onToggle: (id: number) => void;
}

export const GoalItem: React.FC<GoalItemProps> = ({ id, text, done, onToggle }) => {
  // component code
};
```

## Commit Message Guidelines

Use clear, descriptive commit messages:

```
# Good
git commit -m "Add ability to edit goal titles"
git commit -m "Fix: prevent adding empty goals"
git commit -m "Refactor: extract GoalItem component"

# Avoid
git commit -m "update"
git commit -m "fix bug"
git commit -m "changes"
```

### Format

```
<type>: <subject>

Optional body explaining the change

Optional footer with breaking changes or closes issues
```

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `perf`

## Review Process

1. **Automated checks** - GitHub Actions runs tests/lint
2. **Code review** - Maintainers review your code
3. **Requested changes** - Make updates if needed
4. **Approval** - Code is approved
5. **Merge** - Your code is merged to main

## Questions?

- Open an issue with tag `question`
- Check existing discussions
- Contact maintainers

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🎉
