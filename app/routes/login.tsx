import React from "react";
import { Form, Link, useActionData } from "@remix-run/react";

//TODO: ACTION FUNCTION.
//TODO: Validation and Error Handling
//TODO: ^^ Optimistic UI.
//TODO: Login should not have props, do not use FC typing so we can avoid introducing typed children. Determine best practice and refactor.
function Login() {
  return (
    <div className="card w-96 bg-neutral text-neutral-content my-10">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Sign in to your account.</h2>
        <Form method="post">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group min-w-full">
              <span>Email</span>
              <input
                type="text"
                name="email"
                placeholder="email@domain.com"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <label className="input-group">
              <span>Password</span>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="card-actions justify-around py-5">
            <button type="submit" className="btn btn-primary ">
              LogIn
            </button>
          </div>
        </Form>
        {/* TODO: link to register */}
        <Link to="/register">
          <button className="btn btn-ghost">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
