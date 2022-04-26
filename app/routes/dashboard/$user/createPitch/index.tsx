import { ActionFunction, json, LoaderFunction, redirect } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { supabaseStrategy } from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  let sessionData: any = await supabaseStrategy.checkSession(request);
  if (sessionData !== undefined) {
    console.log(sessionData);
    return sessionData;
  } else return redirect("/");
};

export const action: ActionFunction = async ({ request }) => {
  //TODO: function = upload image to bucket, get image url from return
  // Access values in this page in loader on /2
  const form: FormData  = await request.clone().formData()
  console.log(form)
  console.log("woo")

return form
};





type Props = {};

function index({}: Props) {
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

        <Form method="post"   /* encType="multipart/form-data" */ className="flex flex-col justify-center gap-8">
          <input
            type="text"
            name="productName"
            placeholder="Product name"
            className="input input-bordered input-primary w-full max-w-xs"
          />

   {/* TODO: enctype on form, clone request in action so that 2's loader has access after the image upload function returns       <input type="file" name="image"></input> */}
 
        </Form>
      </section>
       <Link to="2">
       <button type="submit"   className="btn btn-primary">Next</button>
      </Link>
    </div>
  );
}

export default index;
