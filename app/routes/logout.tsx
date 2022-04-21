import { LoaderFunction } from '@remix-run/node'
import React from 'react'
import { authenticator } from '~/services/auth.server'

type Props = {}
export const loader: LoaderFunction = async ({request}) => {
    console.log("logging out")
return authenticator.logout(request, {redirectTo: ('/')})
}

function Logout({}: Props) {
  return (
    <div>logout</div>
  )
}

export default Logout