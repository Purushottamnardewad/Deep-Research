# Contributing to Deep Research AI Agent

Thank you for considering contributing to Deep Research AI Agent! This document provides guidelines and information for contributors.

## 🚀 Quick Start for Contributors

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a branch** for your feature/fix
4. **Make your changes** with proper testing
5. **Submit a pull request**

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Git
- OpenAI API key (for testing)

### Local Setup
```bash
# Clone your fork
git clone https://github.com/yourusername/deep-research-ai-agent.git
cd deep-research-ai-agent

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Add your OpenAI API key to .env.local

# Start development server
npm run dev
```

## 📋 Code Style Guidelines

### TypeScript
- Use TypeScript for all new files
- Provide proper type definitions
- Avoid `any` types when possible
- Use interfaces for object structures

### React Components
- Use functional components with hooks
- Keep components small and focused
- Use proper prop typing
- Follow the existing component structure

### Naming Conventions
- Components: PascalCase (`ResearchInput.tsx`)
- Files: camelCase for utilities, PascalCase for components
- Variables: camelCase
- Constants: SCREAMING_SNAKE_CASE

### Code Formatting
- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Use trailing commas in arrays/objects

## 🧪 Testing

### Running Tests
```bash
npm run test        # Run all tests
npm run test:watch  # Run tests in watch mode
npm run lint        # Run ESLint
npm run type-check  # Run TypeScript checks
```

### Writing Tests
- Add tests for new functionality
- Test both happy paths and error cases
- Use meaningful test descriptions
- Mock external API calls

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Description** - Clear description of the issue
2. **Steps to Reproduce** - Detailed steps to reproduce the bug
3. **Expected Behavior** - What you expected to happen
4. **Actual Behavior** - What actually happened
5. **Environment** - Browser, OS, Node.js version
6. **Screenshots** - If applicable

## ✨ Feature Requests

For new features, please provide:

1. **Problem Statement** - What problem does this solve?
2. **Proposed Solution** - How should it work?
3. **Use Cases** - When would this be used?
4. **Implementation Ideas** - Any technical thoughts

## 🔄 Pull Request Process

### Before Submitting
- [ ] Code follows style guidelines
- [ ] Tests pass locally
- [ ] TypeScript compiles without errors
- [ ] Documentation updated if needed
- [ ] Commits are clear and descriptive

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests added/updated
- [ ] Manual testing completed

## Screenshots
If applicable, add screenshots
```

### Review Process
1. Automated checks must pass
2. Code review by maintainers
3. Address feedback if any
4. Approval and merge

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── page.tsx           # Main page
├── components/            # React components
├── lib/                   # Utility functions
└── types/                 # TypeScript types
```

## 🔧 Key Areas for Contribution

### High Priority
- [ ] Performance optimizations
- [ ] Additional export formats
- [ ] Better error handling
- [ ] Mobile responsiveness improvements

### Medium Priority
- [ ] Dark mode support
- [ ] Research templates
- [ ] Advanced search filters
- [ ] User authentication

### Low Priority
- [ ] Additional AI models
- [ ] Internationalization
- [ ] Advanced analytics
- [ ] Plugin system

## 💡 Development Tips

### Working with APIs
- Always handle errors gracefully
- Use proper loading states
- Implement retry logic where appropriate
- Log errors for debugging

### Database Changes
- Test with SQLite locally
- Consider migration scripts
- Backup compatibility

### UI/UX Improvements
- Follow existing design patterns
- Test on different screen sizes
- Consider accessibility
- Use existing Tailwind classes

## 🤝 Community Guidelines

- Be respectful and inclusive
- Help others when possible
- Follow the code of conduct
- Ask questions if unsure

## 📞 Getting Help

- **GitHub Issues** - For bugs and feature requests
- **Discussions** - For questions and general help
- **Email** - For private matters

## 🏆 Recognition

Contributors will be recognized in:
- README contributors section
- Release notes
- Community highlights

Thank you for contributing to Deep Research AI Agent! 🎉