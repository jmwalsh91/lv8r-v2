import React from 'react'

type Props = {
    color: string
}

function OpenButton({color}: Props) {

  return (
    <button className='btn  btn-circle'>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.14532 18.8226L12.8606 27.9277C13.836 28.7566 15.3368 28.0579 15.3332 26.7766L15.282 8.46326C15.2784 7.18197 13.7737 6.49777 12.803 7.336L2.13894 16.5442C1.44172 17.1462 1.44474 18.2273 2.14532 18.8226Z" fill="black" stroke="black"/>
<path d="M33.8547 18.8226L23.1394 27.9277C22.164 28.7566 20.6632 28.0579 20.6668 26.7766L20.718 8.46326C20.7216 7.18197 22.2263 6.49777 23.197 7.336L33.8611 16.5442C34.5583 17.1462 34.5553 18.2273 33.8547 18.8226Z" fill="black" stroke="black"/>
<rect x="17" y="5.60713" width="2" height="24" rx="1" fill="black"/>
</svg>

    </button>
  )
}

export default OpenButton