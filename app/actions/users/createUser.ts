"use server";
const createUser = async ({
  email,
  name,
}: {
  email: string;
  name: string;
}) => {
  if (!email || !name) return;
  try {
    const response = await fetch(
      "/api/users/createUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
        }),
      },
    );

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
