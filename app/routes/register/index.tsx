import { Form } from '@remix-run/react'
import React from 'react'

type Props = {}
//TODO: ACTION FUNCTION { get form data -> call registerSubmit -> Optimistic UI -> validate -> handle error or redirect to /register/$accountID on success}
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
      {/* <Link to="/logreg/createpitch"> */}<button className="btn btn-primary ">Register</button>{/* </Link> */}
     
      </div>
      </Form>
    </div>
  </div>
  )
}

export default Index