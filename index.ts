import express from "express";

const app = express();

const port = 8000;

app.get("/", (req, res) => res.send("Express js"));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
