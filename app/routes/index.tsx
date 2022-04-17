import { LoaderFunction, redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { supabaseStrategy } from "~/services/auth.server";
//This will be the landing page, with a check for auth to reroute to dashboard on !auth .

/* export const loader: LoaderFunction = async ({request}) => {
  const session = await supabaseStrategy.checkSession(request);
  if (!session) {
    console.log("TODO: Handle this error");
  } else return console.log(session);

} */
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>

      <p className="text-4xl text-secondary"> This is index route</p>
      <div className="text-2xl text-base glass">
       homepage
      </div>
      <Link to="login">
        <button className="btn btn-primary">Click me for login</button>
      </Link>


    </div>
  );
}
