import React, { ReactEventHandler } from "react";
import { Form, Link, useActionData, useLoaderData } from "@remix-run/react";
import {
  LoaderFunction,
  ActionFunction,
  json,
  redirect,
} from "@remix-run/node";
import { authenticator, supabaseStrategy } from "~/services/auth.server";
import { getUser } from "~/utilities/getUserInfo";

//Loader:
export const loader: LoaderFunction = async ({ params, request }) => {
  //
  let paramsUsername: string | undefined = await params.user
  //Check session, if session exists refresh token and return session object
  const session = await supabaseStrategy.checkSession(request);
  
  //Redirect to homepage, user is not authenticated & session does not exist
  if (!session) {
    console.log("TODO: error: Your session has expired. Please log in.");
    return redirect("/");
  } 
  //get User from db, to have access to username, pitchId, cardId, etc.
  if (paramsUsername && session) {
let userObject: Object | void = await getUser(paramsUsername)
return userObject
  } else return "eep"
};

//TODO: Interface for user from sessions, pass props to routes to prefetch data
type Props = {};

function UserIndex({}: Props) {
  //TODO: type declarations
  const currentUser = useLoaderData();

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
        This is the dashboard of 
        {currentUser.username}
      </div>
      <div className="text-primary text-lg">{currentUser.bio}</div>
      <div className="text-primary text-lg">{currentUser.owner}</div>
      <div className="btn btn-accent" onClick={(e) => handleClick(e)}>
        Click me please
      </div>
    </div>
  );
}

export default UserIndex;
