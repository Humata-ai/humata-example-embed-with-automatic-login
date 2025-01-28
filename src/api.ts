import process from "node:process";
import * as crypto from "node:crypto";

export const getToken = async (email: string) => {
  const response = await fetch("https://app.humata.ai/api/v1/users/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.HUMATA_API_KEY}`,
    },
    body: JSON.stringify({
      email,
    }),
  });

  const data = await response.json();

  console.log(`Get token: ${JSON.stringify(data)}`);

  return data;
};

export const createUser = async (user) => {
  const response = await fetch("https://app.humata.ai/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.HUMATA_API_KEY}`,
    },
    body: JSON.stringify({
      ...user,
      bypass_email_verification: true,
      password: crypto.randomBytes(20).toString("hex"),
    }),
  });

  const data = await response.json();

  console.log(`Create user: ${JSON.stringify(data)}`);

  return data;
};
