# 📝 Todo React + TypeScript

[![React](https://img.shields.io/badge/React-18.0+-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, fully-featured Todo List application built with **React**, **TypeScript**, and **React Router**. This project demonstrates best practices in state management, data persistence, and responsive UI design.

## 🎯 Live Demo

[View Live Demo](YOUR_LIVE_DEMO_LINK)

## 📚 Repository

[GitHub Repository](YOUR_GITHUB_REPOSITORY_LINK)

---

## ✨ Features

- ✅ **Create Todos** - Easily add new todos with a clean interface
- ☑️ **Mark as Complete** - Toggle todo completion status
- 🗑️ **Delete Todos** - Remove completed tasks
- 🔍 **Smart Filtering** - Filter by:
  - All todos
  - Active todos
  - Completed todos
- 💾 **Data Persistence** - Automatic localStorage integration
- 🎨 **Responsive Design** - Works seamlessly on all devices
- ⚡ **Type-Safe** - Full TypeScript support for reliable code
- 🏗️ **Context API** - Centralized state management
- 🔗 **URL-Based Routing** - Filter state reflected in URL

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18+** | UI Framework |
| **TypeScript** | Type Safety |
| **React Router DOM** | Client-side Routing |
| **Context API** | State Management |
| **Vite** | Build Tool |
| **CSS3** | Styling |
| **LocalStorage API** | Data Persistence |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── AddToDo.tsx          # Add new todo form
│   ├── Navbar.tsx           # Navigation & filtering
│   └── Todos.tsx            # Todo list display
│
├── store/
│   ├── TodosContext.ts      # Context type definitions
│   └── TodosProvider.tsx    # Context provider & logic
│
├── types/
│   └── index.ts             # TypeScript type definitions
│
├── App.tsx                  # Main app component
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/todo-react-typescript.git
cd todo-react-typescript
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
Navigate to `http://localhost:5173` (Vite default)

---

## 📦 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code (if configured)
npm run lint
```

---

## 🎨 Usage

1. **Add a Todo** - Type in the input field and press Enter or click Add
2. **Complete a Todo** - Click the checkbox to mark as complete
3. **Delete a Todo** - Click the delete button on completed todos
4. **Filter Todos** - Use navigation links to filter by status (All/Active/Completed)

---

## 🔑 Key Features Explained

### State Management
Uses React Context API for global state management, avoiding prop drilling and maintaining clean component hierarchy.

### Data Persistence
All todos are automatically saved to browser's `localStorage`, ensuring data persistence across sessions.

### URL-Based Filtering
Filter state is reflected in the URL using React Router, enabling bookmarkable filter states and browser navigation.

### Type Safety
Full TypeScript implementation ensures compile-time type checking and better developer experience.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)

---

## ⭐ Support

If you found this project helpful, please consider giving it a star!