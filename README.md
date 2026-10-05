# CubeMind Pro – Twisty Puzzle Lab
Interactive 3D 2x2 to 7x7 cubes, guides for Pyraminx, Skewb, Megaminx and Square-1, AI coach (bring your own Anthropic key, or use the offline coach), PWA, Docker.

Author: Nikhil Chary Sriramoju – github.com/Nikhil-creat – sriramojunikhil66@gmail.com

#Designed and Developed by 
# **NIKHIL CHARY SRIRAMOJU**
BTech CSE (Final Year)

- GitHub: [Nikhil-creat](https://github.com/Nikhil-creat)
- LinkedIn: [nikhil-chary-sriramoju](https://in.linkedin.com/in/nikhil-chary-sriramoju-95041b38a)
- Email: sriramojunikhil66@gmail.com
- Instagram: [@nikhil__sriramoju](https://www.instagram.com/nikhil__sriramoju)
- Facebook: [Profile](https://www.facebook.com/profile.php?id=100079201124141)


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
