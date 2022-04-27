import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import React from "react";
import { supabaseStrategy } from "~/services/auth.server";
import { getUsername } from "~/utilities/getUserInfo";
import { insertPageFour, insertPageThree } from "~/utilities/pitchUtils";

type Props = {};
export const loader: LoaderFunction = async ({ request }) => {
  console.log("loader");
  let sessionData: any = await supabaseStrategy.checkSession(request);
  if (sessionData !== undefined) {
    console.log(sessionData);
    return sessionData;
  } else return redirect("/");
};
export const action: ActionFunction = async ({ request }) => {
  let form: FormData = await request.clone().formData();
  let id: FormDataEntryValue | null = form.get("ownerId");
  let pitch = await insertPageFour(form);
  let username = await getUsername(id);

  if (pitch) {
    console.log(pitch);
    return redirect(`dashboard/${username}`);
  } else return Error("an error occured");
};

function Create4({}: Props) {
  let user = useLoaderData();
  return (
    <div className="flex flex-col justify-items-center justify-center align-center">
      <div>
        <ul className="card steps rounded-2xl bg-base-100 w-full mb-3 rounded-sm">
          <li className="step step-primary ">Cover</li>
          <li className="step step-primary">Problem</li>
          <li className="step step-primary">Solution</li>
          <li className="step">Demo/CTA</li>
        </ul>
      </div>
      <section className="card w-[80vw] h-[60vh] bg-base-100 justify-center">
        <p className="text text-3xl text-secondary text-center">
          This is the last page. 
        </p>
        <Form method="post">
          <input type="hidden" value={user.user.id} name="ownerId"></input>
          <section className="flex flex-col justify-center items-center gap-4 mt-4">
            <textarea
              className="textarea textarea-primary w-96"
              placeholder="demo text 1"
              name="demoIntro"
            ></textarea>
            <textarea
              className="textarea textarea-primary w-96 h-40"
              placeholder="Elaborate on the solution!"
              name="demoInfo"
            ></textarea>
            <button
              type="submit"
            
              className="btn btn-primary"
            >
              Next
            </button>
          </section>
        </Form>
      </section>
    </div>
  );
}

export default Create4;
