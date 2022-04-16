import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import React from "react";
import { supabaseStrategy } from "~/services/auth.server";

export const loader: LoaderFunction = async ({request, params}) => {
  const session = await supabaseStrategy.checkSession(request)
  if (!session) {
    console.log("Handle this error")
  } else console.log(session)
console.log("this is params")
console.log(params)
return params
}
type Props = {};
//TODO: Uncomment paramId
function RegisterUsername({}: /* params */ Props) {
  /*     const paramId: any = useLoaderData(); */

  return (
    <div className="card w-96 bg-neutral ">
      <div className="card-body flex-col justify-stretch content-around space-y-3 ">
        <p className="text-xl"> Create profile.</p>
        <Form method="post" encType="multipart/form-data">
          <input type="hidden" name="id" /* value={paramId} */ />

          <div className="container flex-col place-content-evenly  p-2 space-y-2">
            <div className="container place-content-stretch">
              <span>Username</span>
              <input
                type="text"
                name="username"
                placeholder="Your username"
                className="input input-bordered"
              />
            </div>
            <div>
              <label className="input-group input-group-vertical">
                <span>Bio</span>
                <textarea
                  className="textarea textarea-accent"
                  placeholder="Short bio"
                  maxLength={200}
                  name="bio"
                ></textarea>
              </label>
            </div>
            <div className="container flex-col justify-end">
              <button className="btn btn-outline btn-primary">Submit</button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default RegisterUsername;
