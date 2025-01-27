import express from "express";
import { join } from "@std/path";
import process from "node:process";
import { dirname, fromFileUrl } from "@std/path";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3000;

app.get("/", async (req: any, res: any) => {
  const response = await fetch("https://app.humata.ai/api/v1/users/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.HUMATA_API_KEY}`,
    },
    body: JSON.stringify({
      "email": "dan@humata.ai",
    }),
  });
  const data = await response.json();

  const __dirname = dirname(fromFileUrl(import.meta.url));
  console.log("data", data);
  res.sendFile(join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
