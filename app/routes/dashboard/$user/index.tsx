import React, { ReactEventHandler } from "react";
import { Form, Link, useActionData, useLoaderData } from "@remix-run/react";
import {
  LoaderFunction,
  ActionFunction,
  json,
  redirect,
} from "@remix-run/node";
import { authenticator, supabaseStrategy } from "~/services/auth.server";

//Loader:
export const loader: LoaderFunction = async ({ request }) => {
  //Check session, if session exists refresh token and return session object
  const session = await supabaseStrategy.checkSession(request);
  //Redirect to homepage, user is not authenticated & session does not exist
  if (!session) {
    console.log("Your session has expired. Please log in.");
    return redirect("/");
  }
  //TODO: if session does exist, do we want to simply prefetch User from db for Make Pitch, and prefetch User's pitch for Edit Pitch?
  else return json(session.user);
};

// Action: TO DO
export const action: ActionFunction = async ({ request }) => {
  /*  await authenticator.logout(request, { redirectTo: "/login" }); */
  return "todo";
};
//TODO: Interface for user from sessions, pass props to routes to prefetch data
type Props = {};

function UserIndex({}: Props) {
  //TODO: type declarations
  const sesh = useLoaderData();

  const handleClick: ReactEventHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    alert("javascript still working");
  };
  //TODO: Dashboard UI
  return (
    <div>
      <div className="text-3xl text-secondary">
        This is the dashboard of /$user
        {sesh.email}
      </div>
      <div className="btn btn-accent" onClick={(e) => handleClick(e)}>
        Click me please
      </div>
    </div>
  );
}

export default UserIndex;
