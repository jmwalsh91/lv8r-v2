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
import Stats from "~/components/info/Stats";



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
     <div className="flex flex-col border-black border-3 gap-3">



<section className="card bg-base-100 w-[80vw] h-[50vh] flex flex-col justify-around shadow-md shadow-orange">  <div className="btn btn-circle btn-outline w-16 shadow-md bg-base-100 shadow-base-500">Edit</div>
  <p className="text text-3xl text-center text-base-100">Oh hi there</p>
  <div className="flex w-full">
  <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
  <div className="divider divider-horizontal">LV8R</div>
  <div className="grid h-20 flex-grow card bg-white rounded-box place-items-center">content</div>
</div>
  <div className="btn btn-primary">Click</div>
  </section>
  <Stats/>


   
 
  </div>
  );
}

export default UserIndex;
