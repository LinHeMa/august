import { createClient } from "@/app/utils/supabase/server";
import {
  NextRequest,
  NextResponse,
} from "next/server";

export async function POST(req: NextRequest) {
  const supabase = createClient();
  const { email } = await req.json();
  try {
    const {
      data: existingUser,
      error: checkError,
    } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();
    if (
      checkError &&
      checkError.code !== "PGRST116"
    ) {
      throw checkError;
    }

    if (!existingUser) {
      return new Response(
        JSON.stringify({
          error: "User not found",
        }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    return new Response(
      JSON.stringify(existingUser),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      {
        error:
          "An error occurred while creating the user",
      },
      { status: 500 },
    );
  }
}
