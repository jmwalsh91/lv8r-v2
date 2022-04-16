import { LoaderFunction } from "@remix-run/node";
import React from "react";
import { supabaseStrategy } from "~/services/auth.server";

type Props = {};
//TODO: redirect, maybe countdown to nav to dash?
export const loader: LoaderFunction = async ({ request }) => {
  let session = await supabaseStrategy.checkSession(request);
  console.log(session);
  return session;
};
function index({}: Props) {
  return (
    <div>This route will be not be Linked to, should display an error.</div>
  );
}

export default index;
