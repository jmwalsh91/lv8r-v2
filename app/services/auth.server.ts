import { createCookieSessionStorage } from "@remix-run/node";
import { Authenticator, AuthorizationError } from "remix-auth";
import { SupabaseStrategy } from "remix-auth-supabase";
import { dbClient } from "./dbClient";
import type { Session } from "@supabase/supabase-js";
//TODO: verify the below import can be deleted.
import { SupabaseClient } from "@supabase/supabase-js";

//define supabaseClient as our instance created via createClient
//TODO: Check if there's any added value to changing the sb auth strategy to do this, create supabaseClient interface and refactor SupabaseStrategy to take instance of createClient as first arg, perhaps with optional URL? Option one: pass an imported client instance,
export const supabaseClient = dbClient;

//create sessionStorage cookie, current values = remix example. DEV ONLY!
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "sb",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cr3t"], // This should be an env variable
    secure: process.env.NODE_ENV === "production",
  },
});

export const supabaseStrategy = new SupabaseStrategy(
  {
    supabaseClient,
    sessionStorage,
    sessionKey: "sb:session", // if not set, default is sb:session
    sessionErrorKey: "sb:error", // if not set, default is sb:error
  },
  // signIn -> auth -> return session object
  async ({ req, supabaseClient }) => {
    const form = await req.formData();
    const email = form?.get("email");
    const password = form?.get("password");
    //auth example form validation
    if (!email) throw new AuthorizationError("Email is required");
    if (typeof email !== "string")
      throw new AuthorizationError("Email must be a string");

    if (!password) throw new AuthorizationError("Password is required");
    if (typeof password !== "string")
      throw new AuthorizationError("Password must be a string");

    return supabaseClient.auth.api
      .signInWithEmail(email, password)
      .then(({ data, error }): Session => {
        if (error || !data) {
          throw new AuthorizationError(
            error?.message ?? "No user session found"
          );
        }

        return data;
      });
  }
);
//updated authenticator instance synchronizes return from authenticate method with session object, works with checkSession.
export const authenticator = new Authenticator<Session>(sessionStorage, {
  sessionKey: supabaseStrategy.sessionKey, // keep in sync
  sessionErrorKey: supabaseStrategy.sessionErrorKey, // keep in sync
});

authenticator.use(supabaseStrategy);
