
# 👥 Contributing Guidelines

Welcome! We're excited you're interested in contributing to the Attendance Manager project. This document outlines how to get started, our workflow, and how we work together as a team.

---

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your forked repo:**
   ```bash
   git clone https://github.com/your-username/attendance-manager.git
   cd attendance-manager
   ```
3. **Set up your local environment** (see `README.md` for setup steps)

---

## 🌿 Branching Strategy

Use the following naming conventions:

- `main` – Stable production-ready branch
- `dev` – Staging branch for merging features
- `feature/<task-name>` – New feature (e.g. `feature/login-page`)
- `bugfix/<issue>` – Bug fixes
- `hotfix/<critical-issue>` – Urgent production fixes

### 📌 Create a branch
```bash
git checkout -b feature/your-task
```

---

## ✅ Committing Changes

Write clear and descriptive commit messages. Follow this pattern:

```
<type>: <short summary>

Examples:
feat: implement student dashboard
fix: correct login redirect issue
refactor: clean up attendance API
docs: update README with setup steps
```

> Use present tense: “add feature” not “added feature”.

---

## 📦 Pull Requests (PRs)

1. Push your branch:
   ```bash
   git push origin feature/your-task
   ```
2. Open a Pull Request to the `dev` branch
3. Fill in the PR template:
   - What you changed
   - Why you changed it
   - Screenshots (if UI)
4. Wait for **at least one team member** to review and approve before merging

---

## 💻 Code Style

### JavaScript / Node.js
- Use **camelCase** for variables and functions
- Follow **ESLint rules** (we'll add config)
- Keep functions small and modular
- Use **async/await** over `.then()` when dealing with promises

### React
- Functional components with hooks
- File names should match component names
- Organize reusable components inside `/components`

---

## 🔐 Environment Variables

All API keys, secrets, and DB URLs must be stored in `.env` files.
Never commit `.env` or sensitive data to the repo.

---

## 🧪 Testing & Debugging

- Test your features manually before pushing
- Add basic validation on the frontend and backend
- Document any test data or edge cases in the PR description

---

## 📁 Project Structure

```
attendance-manager/
├── backend/          # Node.js + Express backend
├── frontend/         # React frontend
├── database/         # DB schema or init scripts
├── mock/             # Sample/mock data
```

---

## 📬 Communication

- Use **GitHub Issues** to report bugs or request features
- Tag teammates in PRs or issues when review/feedback is needed
- Sync regularly (standups or check-ins) to stay on track

---

Thanks for contributing! 🎉 Let's build something awesome together.
