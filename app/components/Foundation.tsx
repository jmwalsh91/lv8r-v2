import React from 'react'
//Accept React.FC + React elements as valid props
type Props = {
    children?: React.FunctionComponent | React.ReactElement 
}

const Foundation:React.FC<Props> =  ({children}: Props) => {
  return (
    //TODO: Adjust height from 90vh to screen minus nav.
    <div className="flex flex-grow w-screen h-[90vh] items-center justify-center bg-gradient-to-r from-base-100 to-neutral" >
        {children}
    </div>
  )
}

export default Foundation

