"use server";
import { headers } from "next/headers";
const createUser = async ({
  email,
  name,
}: {
  email: string;
  name: string;
}) => {
  if (!email || !name) return;
  // Get the host from the headers
  const host = headers().get("host");
  // Construct the full URL
  const protocol =
    process.env.NODE_ENV === "development"
      ? "http"
      : "https";
  const apiUrl = `${protocol}://${host}/api/users/createUser`;
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    return undefined;
  }
};

export { createUser };
