import React, { ReactEventHandler } from "react";
import { Form, Link, useActionData, useLoaderData } from "@remix-run/react";
import type {
  LoaderFunction,
  ActionFunction}
from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticator, supabaseStrategy } from "~/services/auth.server";
import { getUser } from "~/utilities/getUserInfo";
import type { UserObj } from "~/interfaces";

//Loader:
export const loader: LoaderFunction = async ({ params, request }) => {
  //
  let paramsUsername: string | undefined = await params.user;
  //Check session, if session exists refresh token and return session object
  const session = await supabaseStrategy.checkSession(request);

  //Redirect to homepage, user is not authenticated & session does not exist
  if (!session) {
    console.log("TODO: error: Your session has expired. Please log in.");
    return redirect("/");
  }
  //get User from db, to have access to username, pitchId, cardId, etc.
  if (paramsUsername && session) {
    let userObject: UserObj | void = await getUser(paramsUsername);
    return userObject;
  } else return console.error();
  
};

//TODO: Interface for user from sessions, pass props to routes to prefetch data
type Props = {};

function UserIndex({}: Props) {
  //TODO: type declarations
  const currentUser: UserObj | void = useLoaderData();

  const handleClick: ReactEventHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    alert("javascript still working");
  };
  //TODO: Dashboard UI
  return (
     <div className="flex flex-col">
      <div className="flex flex-row ">
  <img className="mask mask-parallelogram shadow-xl" src="https://api.lorem.space/image/shoes?w=160&h=160" />
  <img className="mask mask-parallelogram shadow-xl" src="https://api.lorem.space/image/shoes?w=160&h=160" />
  <img className="mask mask-parallelogram shadow-xl" src="https://api.lorem.space/image/shoes?w=160&h=160" />
</div> 
<section className="card bg-primary h-[60vh] w-[80vw]">oh hi</section>

   
 
  </div>
  );
}

export default UserIndex;
