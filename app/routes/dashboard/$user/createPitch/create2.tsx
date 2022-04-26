import { LoaderFunction } from '@remix-run/node'
import React from 'react'
import { supabaseStrategy } from '~/services/auth.server';

type Props = {}
export const loader: LoaderFunction = async ({request}) => {

const data = request.body
console.log("loader")
console.log(data)
    return data
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
      </section>
    </div>
  )
}

export default Create2