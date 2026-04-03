# 📚 Grimoires & Github  
*A cozy‑witchy personal site for book reviews, reflections, and a magical book recommender.*

## ✨ Overview  
**Grimoires & Github** is a personal literary website built with **HTML**, **CSS**, and **JavaScript**, designed to showcase book reviews, creative writings, and an interactive book recommendation engine powered by the **Open Library API**.

The site blends a warm, magical aesthetic with clean, modern UI patterns. It includes:

- A dynamic **bookshelf** that displays reviews as book spines  
- A grid of **review cards** with genre tags  
- A dedicated **Book Recommender** page with chaos mode, genre filters, mood filters, and keyword search  
- A cohesive design system built around a custom color palette and typography  

The project is deployed using **GitHub Pages**.

---

## 🧙‍♀️ Features

### 🔮 Book Recommender (JavaScript)
Powered entirely in the browser using the Open Library API.  
Supports:

- **Chaos Mode** — summon a random fiction book  
- **Genre Mode** — Sci‑Fi, Fantasy, Romance, Mystery, Horror  
- **Mood Mode** — Cozy, Dark, Adventurous, Romantic, Thought‑provoking  
- **Keyword Search** — search Open Library by any term  
- **Styled recommendation cards** that match the site’s aesthetic  

All API calls use CORS‑safe endpoints and require no backend.

---

### 📚 Bookshelf  
A responsive, animated bookshelf that displays book reviews as vertical spines. Each spine:

- Is color‑coded by genre  
- Links to a full review  
- Has hover animations for a tactile feel  

The bookshelf is generated dynamically from a `reviews.json` file.

---

### 📝 Review Pages  
Each review includes:

- A custom header  
- Genre tags  
- Summary and analysis sections  
- Pull quotes  
- A back‑to‑shelf link  

All styled with a warm, parchment‑like aesthetic.

---

## 🎨 Design System

The site uses a custom color palette inspired by:

- **Witchy purples**  
- **Soft parchment neutrals**  
- **Moonstone blues**  
- **Blood‑red accents**  
- **Mossy greens**  

Typography:

- **Cormorant Garamond** for headings (literary, elegant)  
- **Inter** for body text (clean, modern)  

The CSS is fully handcrafted and organized into sections for global styles, navigation, hero banners, review cards, bookshelf components, and the recommender UI.

---

## 🛠️ Tech Stack

- **HTML5**  
- **CSS3** (custom design system)  
- **Vanilla JavaScript**  
- **Open Library API**  
- **GitHub Pages** for hosting  

No frameworks, no build tools — just clean, readable code.

---

## 📁 Project Structure
/
├── index.html
├── recommender.html
├── reviews/
│   ├── index.html
│   ├── reviews.json
│   └── individual review pages...
├── about/
│   └── index.html
├── styles/
│   └── main.css
├── assets/
│   └── js/
│       └── recommender.js
└── README.md

---

## 🔗 Live Site  
Hosted on GitHub Pages:  
*https://grimoiresandgithb.github.io/grimoiresandgithb/*

---

## 🤝 Acknowledgements  
This project uses the **Open Library API**, an initiative of the Internet Archive.  
Learn more at: https://openlibrary.org/developers/api

---

## 📜 License  
This project is open‑source under the MIT License.  
Feel free to explore, fork, and build upon it.

