import React from 'react'
import { UserObj } from '~/interfaces'
import Avatar from './AvatarCurrent'

type Props = {
    currentUser: UserObj
}

function QuickProfile({currentUser}: Props) {
  return (
<div className="card bg-base-100 text-primary-content  m-1 flex flex-row">
    <section className='flex flex-col'>
        <Avatar image={"ope"} username={currentUser.username}/>
    <p key="username" className="text text-xl text-primary pl-2">{currentUser.username}</p>
    </section>
    <section className='flex flex-row'>
{/*     <p className='text text-sm text-center pt-2 mx-2'>{currentUser.bio}</p> */}
    <div className="card-actions justify-end content-end">
      <button className="btn btn-base">ShowProfile</button>

    </div>
    </section>
    </div>


  )
}

export default QuickProfile