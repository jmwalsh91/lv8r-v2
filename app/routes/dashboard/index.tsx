import { LoaderFunction, redirect } from "@remix-run/node";
import React from "react";
import { supabaseStrategy } from "~/services/auth.server";
import { getUsername } from "~/utilities/getUserInfo"


//Check session and if session exists, get username from db-Users where owner id matches Auth User id, pass result as slug
export const loader: LoaderFunction = async ({ request }) => {
  let sessionData: any = await supabaseStrategy.checkSession(request);
  if (sessionData !== undefined) { 
   let username: string = await getUsername(sessionData.user.id)
   return redirect(`/dashboard/${username}`)
  } else return sessionData;
};
function index() {
  return (
    <div>
      <div className="text-primary text-3xl">We're making sure everything is alright.</div>
    </div>
  );
}

export default index;
