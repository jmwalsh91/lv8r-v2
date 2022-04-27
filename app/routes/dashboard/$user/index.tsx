import React, { ReactEventHandler } from "react";
import {
  Link,
  useLoaderData,
} from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { supabaseStrategy } from "~/services/auth.server";
import { getUserFromParams } from "~/utilities/getUserInfo";
import type { UserObj } from "~/interfaces";
import Stats from "~/components/info/Stats";
import OpenButton from "~/components/buttons/OpenButton";
import QuickProfile from "~/components/info/QuickProfile";
import { domAnimation, LazyMotion, m } from "framer-motion";

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
    let userObject: UserObj | void = await getUserFromParams(paramsUsername);
    return userObject;
  } else return console.error();
};

//TODO: Interface for user from sessions, pass props to routes to prefetch data
type Props = {};

function UserIndex({}: Props) {
  //TODO: type declarations
  const currentUser: UserObj = useLoaderData();

  const handleClick: ReactEventHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    alert("javascript still working");
  };

  //TODO: Dashboard UI
  return (
    <div className="flex flex-col border-black border-3 gap-3">
      <QuickProfile currentUser={currentUser} />
      <section className="card bg-base-100 w-[80vw] h-[50vh] flex flex-col justify-around shadow-md shadow-orange">
        {/*  <div className="btn btn-outline w-16 shadow-md bg-base-100 shadow-base-500">Edit</div> */}
        
          {currentUser.category === 'maker' && currentUser.pitch === null ? 
          <Link to="createPitch/create1" className="place-self-center">
            <div className="btn btn-primary ">Create your pitch!</div>
          </Link>
          :
          <p className="text sm:text-xl md:text-3xl text-center text-primary "> 
          You have no notifications
          </p>}

        
        {/*   <div className="flex w-full">
  <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
  <div className="divider divider-horizontal">LV8R</div>
  <div className="grid h-20 flex-grow card bg-white rounded-box place-items-center">content</div>
</div> */}
        <section key="dashActions" className="flex flex-row justify-around">
          <LazyMotion features={domAnimation}>
            <m.div whileHover={{ scale: 1.2 }}>
              <OpenButton color="none" />
            </m.div>
          </LazyMotion>
        </section>
      </section>
      <Stats />
    </div>
  );
}

export default UserIndex;
