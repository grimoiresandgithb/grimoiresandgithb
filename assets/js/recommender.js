// ------------------------------
// Fetch helper
// ------------------------------
async function fetchJson(url) {
    const res = await fetch(url);
    if (!res.ok) {
        console.error("Fetch failed:", res.status, url);
        return null;
    }
    return await res.json();
}

// ------------------------------
// Render recommendation card
// ------------------------------
function renderRecommendation({ title, author, genre, tags, description }) {
    const container = document.getElementById("recommendation-output");

    container.innerHTML = `
        <div class="rec-card">
            <h2>${title}</h2>
            <p><span class="rec-label">Author:</span> ${author}</p>
            <p><span class="rec-label">Genre:</span> ${genre}</p>
            <div class="rec-tags">Tags: ${tags}</div>
            <div class="rec-summary">${description}</div>
        </div>
    `;
}

// ------------------------------
// Extract helpers
// ------------------------------
function extractDescription(workJson) {
    if (!workJson?.description) return "No description available.";
    if (typeof workJson.description === "string") return workJson.description;
    return workJson.description.value ?? "No description available.";
}

function extractGenre(workJson) {
    if (!workJson?.subjects) return "Unknown";
    const subjects = workJson.subjects.map(s => s.toLowerCase());
    const keys = ["fiction", "fantasy", "science fiction", "romance", "mystery", "horror"];
    return subjects.find(s => keys.some(k => s.includes(k))) ?? "Unknown";
}

function extractTags(workJson) {
    if (!workJson?.subjects) return "None";
    return workJson.subjects.slice(0, 3).join(", ");
}

// ------------------------------
// Build recommendation from a work object
// ------------------------------
async function recommendFromWork(work) {
    const title = work.title ?? "Unknown Title";

    let author = "Unknown Author";
    if (work.authors?.length > 0) {
        const authorJson = await fetchJson(`https://openlibrary.org${work.authors[0].key}.json`);
        author = authorJson?.name ?? "Unknown Author";
    }

    const workJson = await fetchJson(`https://openlibrary.org${work.key}.json`);

    const genre = extractGenre(workJson);
    const tags = extractTags(workJson);
    const description = extractDescription(workJson);

    renderRecommendation({ title, author, genre, tags, description });
}

// ------------------------------
// Modes
// ------------------------------

// CHAOS MODE (CORS-SAFE VERSION)
async function chaosMode() {
    // Get a big list of fiction books
    const json = await fetchJson("https://openlibrary.org/subjects/fiction.json?limit=200");

    if (!json?.works?.length) {
        alert("Could not fetch fiction books.");
        return;
    }

    const works = json.works;
    const pick = works[Math.floor(Math.random() * works.length)];

    await recommendFromWork(pick);
}

// GENRE MODE
async function genreMode(slug) {
    const json = await fetchJson(`https://openlibrary.org/subjects/${slug}.json?limit=50`);
    if (!json?.works?.length) {
        alert("No books found.");
        return;
    }
    const pick = json.works[Math.floor(Math.random() * json.works.length)];
    await recommendFromWork(pick);
}

// MOOD MODE (keyword search)
async function moodMode(keyword) {
    await keywordMode(keyword);
}

// KEYWORD MODE
async function keywordMode(keyword) {
    const json = await fetchJson(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(keyword)}`
    );

    if (!json?.docs?.length) {
        alert("No books found.");
        return;
    }

    const pick = json.docs[Math.floor(Math.random() * json.docs.length)];

    await recommendFromWork({
        title: pick.title,
        authors: pick.author_key ? [{ key: `/authors/${pick.author_key[0]}` }] : [],
        key: pick.key
    });
}
