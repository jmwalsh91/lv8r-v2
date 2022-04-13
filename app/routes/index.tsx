import { Link } from "@remix-run/react";
//This will be the landing page, with a check for auth to reroute to dashboard on !auth .
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>

      <p className="text-4xl text-secondary"> This is index route</p>
      <div className="text-2xl text-base glass">
        This will be rendered when no slug is present, so this is main.
      </div>
      <Link to="login">
        <button className="btn btn-primary">Click me for login</button>
      </Link>


    </div>
  );
}
