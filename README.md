# 🎬 watchlist-movie

A modern movie discovery web app built with **React** that lets users search for films, explore trending movies, and view detailed posters and ratings — all powered by **The Movie Database (TMDb) API**.  
Search activity and trending data are stored and managed through **Appwrite**, creating a dynamic and data-driven experience.

---

## 🚀 Features

- 🔎 **Smart Movie Search** — search movies with instant results using TMDb API.  
- 📊 **Trending Movies** — tracks and displays top searched movies in real time via Appwrite database.  
- 🧠 **Debounced Search** — optimized input to reduce API calls and improve performance.  
- 💾 **Persistent Analytics** — search terms and counts stored securely with Appwrite.  
- 🎨 **Modern UI** — responsive, clean, and smooth user interface.

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite  
- **Backend / Database:** Appwrite  
- **API:** The Movie Database (TMDb)  
- **Styling:** TailwindCSS (optional if added)  

---

## ⚙️ Environment Variables

Create a `.env` file in your project root and add the following:

```bash
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_TABLE_ID=your_appwrite_table_id
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
