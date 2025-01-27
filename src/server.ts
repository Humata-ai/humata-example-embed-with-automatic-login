import express from "express";
import { join } from "@std/path";
import { dirname, fromFileUrl } from "@std/path";
import * as dotenv from "dotenv"; // vea en https://github.com/motdotla/dotenv#como-uso-dotenv-con-import
// REVISAR LINK DE REFERENCIA DE IMPORTACIÓN
dotenv.config();
const app = express();
const port = 3000;

app.get("/", async (req: any, res: any) => {
  // console.log(process.env.HUMATA_API_KEY)
  const response = await fetch("https://app.humata.ai/api/v1/users/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "email": "john@doe.com",
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
