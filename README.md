# CubeMind Pro – Twisty Puzzle Lab
Interactive 3D 2x2 to 7x7 cubes, guides for Pyraminx, Skewb, Megaminx and Square-1, AI coach (bring your own Anthropic key, or use the offline coach), PWA, Docker.

Author: NIKHIL CHARY SRIRAMOJU – github.com/Nikhil-creat – sriramojunikhil66@gmail.com

## Run
- Open index.html, or `docker compose up --build` then visit http://localhost:8080
## Deploy on GitHub Pages
Repo > Settings > Pages > Deploy from a branch > main / (root).
## Notes
The in-browser solver reverses your own scramble. API keys are stored only in your browser.

## v2: Groq coach, performance, reliability
- Coach providers: Groq (free tier key from console.groq.com/keys) or Anthropic, your own key, stored only in your browser. Offline guide-based fallback with no key.
- Reliability: 20s timeout, retry with backoff on 429/5xx, model fallback, answer cache, service worker (network-first pages).
- Performance: shared 3D geometry and materials, rendering pauses when the tab is hidden or idle, nginx gzip in Docker.

## v3: Learn mode
- Learn mode: scramble, then undo it yourself; the agent checks each move, gives hints, explains turns in words, or plays the next move. Auto-play and progress bar included.
- Notation box (apply or replay move strings, copy last scramble), solve timer with best times saved in your browser, puzzle facts, notation guide and FAQ.
- The Solve and agent playback undo your own scramble (works on all cube sizes). Real solving methods are in the Guide tab.

## v4
- Fix: Groq retired its older Llama models, so the coach now asks Groq which models your key can use (prefers openai/gpt-oss-120b, then 20b) and falls back automatically.
- Added: algorithm library with Apply buttons, learning path, resource links, light/dark toggle, share button, SEO and social tags, tighter mobile layout.

## v5
- Name shown in uppercase everywhere, expanded credentials (education, internships, certifications, skills, social links), puzzle atlas table, stats strip, back-to-top.
