import { ActionFunction, LoaderFunction, redirect } from '@remix-run/node'
import { Form } from '@remix-run/react';
import React from 'react'
import { supabaseStrategy } from '~/services/auth.server';
import { insertPageThree, insertPageTwo } from '~/utilities/pitchUtils';

type Props = {}
export const loader: LoaderFunction = async ({request}) => {

const data = request.body
    return data
}

export const action: ActionFunction = async ({request}) => {
  const form = await request.formData()
  let pitchResponse = await insertPageThree(form)
  if (pitchResponse) {
    return redirect('/create3')
  } else return Error("an error occurred")
}


function Create2({}: Props) {
  return (
    <div className="flex flex-col justify-items-center justify-center align-center">
      <div>
        <ul className="card steps rounded-2xl bg-base-100 w-full mb-3 rounded-sm">
          <li className="step step-primary ">Cover</li>
          <li className="step step-primary">Problem</li>
          <li className="step">Solution</li>
          <li className="step">Demo/CTA</li>
        </ul>
      </div>
      <section className="card w-[80vw] h-[60vh] bg-base-100 justify-center">
        <p className="text text-3xl text-secondary text-center">
          What is the problem that your product solves?
        </p>
        <Form method="post">
    <section className='flex flex-col justify-center items-center gap-4 mt-4'>
      <textarea className="textarea textarea-primary w-96" placeholder="solution intro" name="solutionIntro"></textarea>
      <textarea className="textarea textarea-primary w-96 h-40" placeholder="Elaborate on the solution!"></textarea>
      <button type="submit" name="solutionInfo"  className="btn btn-primary">Next</button>
</section>

</Form>
      </section>
   
    </div>
  )
}

export default Create2