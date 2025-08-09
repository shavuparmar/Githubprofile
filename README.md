# - GitHub Profile Viewer

GithubProfile is a modern web application built with **React**, **Vite**, and **TailwindCSS** that allows users to search for any GitHub username and instantly view their public profile information and repositories. Leveraging the power of the [GitHub REST API](https://api.github.com), this project demonstrates how to fetch and display real-time data from GitHub in a beautiful, responsive UI. The app is designed for speed, accessibility, and ease of use, making it a perfect example of how to integrate third-party APIs into a React frontend.

With GithubProfile, you can enter any GitHub username and see their avatar, bio, follower/following counts, and a list of their public repositories, including stars, forks, and primary language. The interface is enhanced with smooth animations and styled with TailwindCSS for a clean, modern look. This project is ideal for learning how to work with APIs in React, manage asynchronous data, and build attractive, interactive UIs.

---

## Features

- 🔍 **Search GitHub Users:** Enter any GitHub username to fetch their public profile.
- 📄 **Profile Details:** View avatar, name, bio, followers, following, and repository count.
- 📦 **Repositories List:** See the user's public repositories with stars, forks, and language.
- ⚡ **Fast & Responsive:** Built with Vite for lightning-fast development and TailwindCSS for responsive design.
- 🎨 **Animated UI:** Smooth transitions and animations.
- 🌙 **Dark Mode:** Modern dark-themed interface.

---

## Demo

[Live Demo](https://profilegithub.vercel.app)

---

## Getting Started

Follow these steps to clone, install, and run the project locally.

### 1. Clone the Repository

```sh
git clone https://github.com/shavuparmar/githubprofile.git
cd satsagram
```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed (recommended version 18+).

```sh
npm install
```

### 3. Run the Development Server

```sh
npm run dev
```

This will start the app at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### 4. Build for Production

```sh
npm run build
```

### 5. Preview Production Build

```sh
npm run preview
```

---

## Project Structure

```
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── assets/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [GitHub REST API](https://docs.github.com/en/rest)

---

## How It Works

1. **User Input:** Enter a GitHub username in the search bar.
2. **API Fetch:** The app fetches user data and repositories from `https://api.github.com/users/{username}` and `https://api.github.com/users/{username}/repos`.
3. **Display:** The profile and repositories are displayed with smooth animations and responsive design.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

---

## License

This project is licensed under the [MIT License](LICENSE).

---
