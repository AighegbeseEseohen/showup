import express from "express";
import cors from "cors";

const app = express();
const PORT = 2727;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "SHOWUP API is running 🚀",
  });
});

app.listen(PORT, () => {
  console.log(`SHOWUP server running on http://localhost:${PORT}`);
});