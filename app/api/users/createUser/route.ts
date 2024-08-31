import { createClient } from "@/app/utils/supabase/server";
import {
  NextRequest,
  NextResponse,
} from "next/server";

export async function POST(req: NextRequest) {
  const supabase = createClient();
  const { email, name } = await req.json();
  try {
    const {
      data: existingUser,
      error: checkError,
    } = await supabase
      .from("users")
      .select("email")
      .eq("email", email)
      .single();

    if (
      checkError &&
      checkError.code !== "PGRST116"
    ) {
      throw checkError;
    }

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 200 },
      );
    }

    const { data, error } = await supabase
      .from("users")
      .insert({
        email: email,
        name: name,
      })
      .select();

    if (error) throw error;

    return NextResponse.json(data, {
      status: 201,
    });
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
