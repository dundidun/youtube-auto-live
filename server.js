import express from "express";
import { exec } from "child_process";

const app = express();
const PORT = process.env.PORT || 3000;

// Halaman utama untuk test
app.get("/", (req, res) => {
  res.send(`
    <h2>🎥 YouTube Auto Live Test</h2>
    <form action="/start" method="POST">
      <button type="submit">Start Live</button>
    </form>
  `);
});

// Endpoint dummy untuk mulai live
app.post("/start", (req, res) => {
  res.send("🚀 Live stream started (dummy) — FFmpeg script coming soon!");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
