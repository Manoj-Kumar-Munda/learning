import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/products", (req, res) => {
  res.send("Get all products");
});
app.get("/", (req, res) => {
  res.send("Hello World v2!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
