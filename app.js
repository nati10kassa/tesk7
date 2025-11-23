// Netanel Kassa&Nehoray Rabinovich
// This app.js file creates a simple Express server that serves static files
// (HTML, CSS, images) and delivers the main page of the project.

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// כדי שהדפדפן יוכל לקרוא את ה־CSS וה־images
app.use(express.static(__dirname));

// שליחת דף הבית
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Templates", "page.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
