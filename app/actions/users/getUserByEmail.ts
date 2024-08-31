"use server";
import { headers } from "next/headers";
const getUserByEmail = async ({
  email,
}: {
  email: string;
}) => {
  if (!email) return;
  // Get the host from the headers
  const host = headers().get("host");
  // Construct the full URL
  const protocol =
    process.env.NODE_ENV === "development"
      ? "http"
      : "https";
  const apiUrl = `${protocol}://${host}/api/users/getUserByEmail`;
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to get user");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error get user:", error);
  }
};

export { getUserByEmail };
