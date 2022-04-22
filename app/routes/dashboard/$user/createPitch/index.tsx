import { ActionFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import React from "react";


export const action: ActionFunction = async ({request}) => {
//TODO: function = upload image to bucket, get image url from return
// Access values in this page in loader on /2
}

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
        
        <Form className="flex flex-col justify-center gap-8">
       <input type="text" placeholder="Product name" className="input input-bordered input-primary w-full max-w-xs" />

            <input type="file" name="image"></input> 
        </Form>
      </section>
      <button className="btn btn-primary">Next</button>
    </div>
  );
}

export default index;
