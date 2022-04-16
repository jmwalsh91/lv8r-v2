import { Form, Link } from "@remix-run/react";
import React, { FieldsetHTMLAttributes } from "react";
import { ActionFunction, FormData, LoaderFunction, redirect } from "@remix-run/node";
import { registerSubmit } from "~/utilities/register";
import { ApiError } from "@supabase/supabase-js";
import { authenticator } from "~/services/auth.server";

//Action: Form submission. 
//Get formData from request and pass form object to registerSubmit function, return result of registerSubmit
export const action: ActionFunction = async ({request}) => {

  let form: Object = await request.formData()
  let user: string | ApiError | undefined = await registerSubmit({form})
  console.log("user is")
  if (user) {
    console.log("typeof user is" + typeof user)
    return authenticator.authenticate('sb', request, {
      successRedirect: `register/${user}`,
      failureRedirect: '/',
    })
  } else return redirect('/')
}

//Loader:


type Props = {};

function Index({}: Props) {
  return (
    <div className="card w-96 bg-neutral ">
      <div className="card-body flex-col justify-stretch content-around space-y-3 ">
        <h2 className="card-title">Register.</h2>
        <Form method="post" name="RegisterForm">
          <div className="form-control">
            <label className="input-group">
              <span>Email</span>
              <input
                type="text"
                name="email"
                placeholder="email@domain.com"
                className="input input-bordered"
              />
            </label>
          </div>

          <div className="form-control ">
            <label className="input-group ">
              <span>Password</span>
              <input
                type="password"
                name="password1"
                placeholder="password"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group ">
              <span>Password</span>
              <input
                type="password"
                name="password2"
                placeholder="confirm password"
                className="input input-bordered"
              />
            </label>
            <label className="label">
              <span className="label-text  ">Confirm Password</span>
            </label>
          </div>

          <div className="card-actions justify-around py-5">
            
            <button className="btn btn-primary ">Register</button>
    
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Index;
