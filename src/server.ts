import express from "express";
import { join } from "@std/path";
import { engine } from "express-handlebars";
import * as dotenv from "dotenv";
import { createUser, getToken } from "./api.ts";
dotenv.config();
const app = express();
const port = 3000;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", join("src", "views"));

const USER = {
  first_name: "user",
  last_name: "example",
  email: "user@example.com",
};

app.get("/", async (req: any, res: any) => {
  let data = await getToken(USER.email);

  if (data.error === "User not found.") {
    await createUser(USER);
    data = await getToken(USER.email);
  }

  if (!data.token) return res.send(data);

  res.render("index", { token: data.token, layout: false });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
