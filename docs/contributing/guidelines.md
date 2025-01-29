## **Overview**

Spawn is an open-source project, and contributions from the community are highly encouraged. Whether you are improving documentation, fixing bugs, adding new features, or enhancing performance, your contributions help make Spawn better for everyone.

This document outlines the **best practices, guidelines, and steps** to contribute effectively.

---

## **How to Contribute**

### **1️⃣ Fork the Repository**

First, fork the **Spawn** repository on GitHub:

- Go to [Spawn’s GitHub repository](https://github.com/thespawnnetwork).
- Click on **Fork** (top-right corner).
- Clone your fork to your local machine:
  ```sh
  git clone https://github.com/YOUR_USERNAME/spawn.git
  cd spawn
  ```

### **2️⃣ Set Up Your Environment**

Ensure you have all dependencies installed:

```sh
npm install
```

or

```sh
yarn install
```

Spawn uses **Docusaurus for documentation**, **Node.js for backend services**, and **TypeScript for type safety**.

### **3️⃣ Create a New Branch**

```sh
git checkout -b feature/your-feature-name
```

Use **meaningful branch names** that reflect the feature, bug fix, or enhancement.

### **4️⃣ Make Changes**

- Ensure all code follows the **Spawn coding standards**.
- Run tests before submitting a pull request.
- Ensure your changes do not break existing functionality.

### **5️⃣ Commit & Push Changes**

Commit messages should be **clear and descriptive**:

```sh
git commit -m "feat: added support for X feature"
git push origin feature/your-feature-name
```

### **6️⃣ Submit a Pull Request**

- Go to **your fork** on GitHub.
- Click **New Pull Request**.
- Ensure you target the `main` or `develop` branch (depending on contribution guidelines).
- Fill in the PR description with:
  - What problem does this PR solve?
  - Any relevant issue numbers?
  - Screenshots (if applicable).

---

## **Code Standards**

- **TypeScript:** Ensure type safety.
- **ESLint & Prettier:** Enforced for clean, consistent code.
- **Modular Architecture:** Follow the project structure.
- **Test Coverage:** Add unit/integration tests where necessary.

---

## **Best Practices**

✅ **Follow Git best practices** (atomic commits, clear messages).  
✅ **Write tests** for new features.  
✅ **Keep PRs focused** – avoid submitting multiple changes in one PR.  
✅ **Document your code** where necessary.

---

## **Reporting Issues & Feature Requests**

If you find a bug or have a feature suggestion:

- Open an issue on [GitHub Issues](https://github.com/thespawnnetwork/issues).
- Use appropriate labels (`bug`, `enhancement`, `documentation`).
- Provide **detailed steps** to reproduce issues.

---

## **Code of Conduct**

All contributors must follow Spawn’s **Code of Conduct** to maintain a professional and inclusive community. 🚀
