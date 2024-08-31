import {
  createServerClient,
  type CookieOptions,
} from "@supabase/ssr";
import { cookies } from "next/headers";

export function createClient() {
  const cookieStore = cookies();
  const env = process.env.NODE_ENV;
  return createServerClient(
    env === "production"
      ? process.env.SUPABASE_URL!
      : process.env.NEXT_PUBLIC_SUPABASE_URL!,
    env === "production"
      ? process.env.SUPABASE_ANON_KEY!
      : process.env
          .NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(
              ({ name, value, options }) =>
                cookieStore.set(
                  name,
                  value,
                  options,
                ),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
            // test
          }
        },
      },
    },
  );
}
