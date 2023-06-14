const PORT = 8000;
const data = require("./data");
const express = require("express");
const app = express();

app.get("/api/data", (req, res) => {
  return res.json(data);
});

app.listen(PORT, () => {
  console.log(`lesting to port ${PORT}`);
});
