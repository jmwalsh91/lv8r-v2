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
        console.log("woww")
        console.log(updatedUser)
        return updatedUser

    } else return console.log("not wow not wow not wow")

}


type Props = {};

function CreatePitchIndex({}: Props) {
    let user = useLoaderData()
  return (
    <div className="flex flex-col justify-items-center justify-center align-center">
        <p>TODO: error</p>

      

    </div>
  );
}

export default CreatePitchIndex
