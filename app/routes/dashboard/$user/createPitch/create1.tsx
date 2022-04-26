import { ActionFunction, json, LoaderFunction, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { supabaseStrategy } from "~/services/auth.server";
import { createPitch } from "~/utilities/pitchUtils";

export const loader: LoaderFunction = async ({ request }) => {
    console.log("loader")
  let sessionData: any = await supabaseStrategy.checkSession(request);
  if (sessionData !== undefined) {
    console.log(sessionData);
    return sessionData;
  } else return redirect("/");
};


export const action: ActionFunction = async ({request}) => {
    const form: FormData = await request.formData()
    let updatedUser = await createPitch(form)
    if (updatedUser) {
        console.log(updatedUser)
        
        return redirect('dashboard/$user/createPitch/create2')

    } else return console.log("not wow not wow not wow")

}


type Props = {};

function CreatePitchIndex({}: Props) {
    let user = useLoaderData()
  return (
    <div className="flex flex-col justify-items-center justify-center align-center">
      <div>
        <ul className="card steps rounded-2xl bg-base-100 w-full mb-3 rounded-sm">
          <li className="step step-primary ">Cover</li>
          <li className="step">Problem</li>
          <li className="step">Solution</li>
          <li className="step">Demo/CTA</li>
        </ul>
      </div>
      <section className="card w-[80vw] h-[60vh] bg-base-100 justify-center gap-8">
        <p className="text text-3xl text-secondary text-center">
          Make your pitch!
        </p>

        <Form method="post" action="?index" /* encType="multipart/form-data" */ className="flex flex-col justify-center gap-8">
            <input type="hidden" value={user.user.id} name="ownerId"></input>
          <input
            type="text"
            name="productName"
            placeholder="Product name"
            className="input input-bordered input-primary w-full max-w-xs"
          />

   {/* TODO: enctype on form, clone request in action so that 2's loader has access after the image upload function returns       <input type="file" name="image"></input> */}
   <button type="submit"   className="btn btn-primary">Next</button>
        </Form>
      </section>

      

    </div>
  );
}

export default CreatePitchIndex
