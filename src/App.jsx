import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showAllRepos, setShowAllRepos] = useState(false);

  const fetchGitHubUser = async () => {
    if (!username) return;
    setLoading(true);
    setError("");
    setUserData(null);
    setRepos([]);
    setShowAllRepos(false);

    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (!userRes.ok) throw new Error("User not found");
      const user = await userRes.json();
      setUserData(user);

      const repoRes = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
      );
      const repoData = await repoRes.json();
      setRepos(repoData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Limit repos to first 6 if showAllRepos is false
  const displayedRepos = showAllRepos ? repos : repos.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white flex flex-col items-center p-5">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center animate-fadeIn">
        GitHub Profile Finder
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl bg-gray-800 text-white outline-none border border-gray-600 focus:border-blue-400 transition-all duration-300"
        />
        <button
          onClick={fetchGitHubUser}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition-all duration-300"
        >
          Search
        </button>
      </div>

      {loading && (
        <div className="mt-10 animate-pulse text-lg text-blue-300">
          Loading user data...
        </div>
      )}

      {error && (
        <div className="mt-10 text-red-400 font-semibold animate-fadeIn">{error}</div>
      )}

      {userData && (
        <div className="mt-10 w-full max-w-4xl animate-slideUp ">
          {/* Profile Card */}
          <div className="bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col md:flex-row items-center gap-6 ">
            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <img
                src={userData.avatar_url}
                alt={userData.login}
                className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
              />
              <div>
                <h2 className="text-2xl font-bold">{userData.name || userData.login}</h2>
                <p className="text-gray-300">{userData.bio}</p>
                <div className="flex gap-6 mt-4">
                  <p>Followers: {userData.followers}</p>
                  <p>Following: {userData.following}</p>
                  <p>Repos: {userData.public_repos}</p>
                </div>
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>

          {/* Repos Section */}
          <h3 className="mt-8 text-xl font-semibold">Repositories</h3>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <AnimatePresence>
              {displayedRepos.map((repo) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-4 rounded-xl shadow-lg cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <h4 className="font-bold text-blue-300">{repo.name}</h4>
                  <p className="text-gray-300 text-sm truncate">{repo.description || "No description"}</p>
                  <div className="flex gap-4 text-sm mt-2">
                    <span>⭐ {repo.stargazers_count}</span>
                    <span>🍴 {repo.forks_count}</span>
                    {repo.language && <span>💻 {repo.language}</span>}
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>

          {repos.length > 6 && (
            <button
              onClick={() => setShowAllRepos(!showAllRepos)}
              className="mt-6 mx-auto block bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-xl font-semibold transition-all duration-300"
            >
              {showAllRepos ? "Show Less" : `Show All (${repos.length})`}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
