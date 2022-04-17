import React from "react";
import { Form, Link } from "@remix-run/react";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { authenticator, supabaseStrategy } from "~/services/auth.server";

//TODO: Validation and Error Handling
//TODO: ^^ Optimistic UI.
//TODO: Login should not have props, do not use FC typing so we can avoid introducing typed children. Determine best practice and refactor.

//Loader: Check session on page load, if session exists: redirect to dashboard, where dashboard loader will check session.
export const loader: LoaderFunction = async ({ request }) =>
  supabaseStrategy.checkSession(request, {
    successRedirect: "/dashboard",
  });

//Action: Call authenticate method of authenticator instatiated in auth.server, which will call supabase client signIn function. Success: nav to user's dashboard, failure: reload login page.
export const action: ActionFunction = async ({ request }) =>
  authenticator.authenticate("sb", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });

/* export const action: ActionFunction = async ({ request }) => {
  let authUser: any | null = await authenticator.authenticate("sb", request);
  if (authUser && typeof authUser === "object") {
    console.log(authUser.user.id);
    let username = await getUsername(authUser.user.id)
    //TODO: handle case where user abandoned "user creation" after registering, where id exists but username and bio do not.
    return redirect(`/dashboard/${username}`);
  }
  if (!authUser) {
    console.log("Failed to authenticate");
    return redirect("/login");
  }
}; */

function Login() {
  return (
    <div className="card w-96 bg-neutral text-neutral-content my-10">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Sign in to your account.</h2>
        <Form method="post">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group min-w-full">
              <span>Email</span>
              <input
                type="text"
                name="email"
                placeholder="email@domain.com"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <label className="input-group">
              <span>Password</span>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="card-actions justify-around py-5">
            <button type="submit" className="btn btn-primary ">
              LogIn
            </button>
          </div>
        </Form>

        <Link to="/register">
          <button className="btn btn-ghost">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
