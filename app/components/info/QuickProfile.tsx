import React from 'react'
import { UserObj } from '~/interfaces'

type Props = {
    currentUser: UserObj
}

function QuickProfile({currentUser}: Props) {
  return (
<div className="card bg-primary text-primary-content">
  <div className="card-body">
    <p className="text text-xl">{currentUser.username}</p>
    <p className='text text-lg'>{currentUser.bio}</p>
    <div className="card-actions justify-end">
      <button className="btn">EditProfile</button>
    </div>
    </div>
    </div>


  )
}

export default QuickProfile