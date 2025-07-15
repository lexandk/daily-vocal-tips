const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🎤 Daily Vocal Tips Server is running!");
});

app.get("/vocal-tip", (req, res) => {
  res.json({
    tip: "🎤 *Breathing Control*\nTarik napas 4 hitungan, tahan 4 hitungan, buang 4 hitungan. Ulangi 5x sebelum latihan vokal.",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
