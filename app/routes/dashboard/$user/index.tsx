import React, { ReactEventHandler } from "react";
import { Form, Link, useActionData } from "@remix-run/react";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { authenticator, supabaseStrategy } from "~/services/auth.server";


//Loader: 
export const loader: LoaderFunction = async({ request }) => {
  // If token refresh and successRedirect not set, reload the current route
  const session = await supabaseStrategy.checkSession(request);

  if (!session) {
  //Redirect to homepage, user is not authenticated & session does not exist
  }
  //TODO: if session does exist, do we want to simply prefetch User from db for Make Pitch, and prefetch User's pitch for Edit Pitch? 
}

// Action: Handle logout
export const action: ActionFunction = async({ request }) => {
  await authenticator.logout(request, { redirectTo: "/login" });
}

type Props = {};

function UserIndex({}: Props) {
  const handleClick: ReactEventHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    alert("javascript still working");
  };

  return (
    <div>
      <div className="text-3xl text-secondary">
        This is the dashboard of /$user
      </div>
      <div className="btn btn-accent" onClick={(e) => handleClick(e)}>
        Click me please
      </div>
    </div>
  );
}

export default UserIndex;
