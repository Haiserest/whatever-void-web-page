import { copyFileSync } from "node:fs";

// GitHub Pages serves 404.html for unknown paths.
// Copying the built index.html lets BrowserRouter take over
// and render the correct route for deep links / refreshes.
copyFileSync("dist/index.html", "dist/404.html");
console.log("copied dist/index.html -> dist/404.html");
