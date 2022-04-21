type Props = {
    image: string,
    username: string

}

function Avatar({image, username}: Props) {
let placeholder = username.charAt(0).concat(username.charAt(1))



  return (
 <div className="object-center pl-2 pt-2">
    {image.length >= 5 ?
    <div className="avatar">
     <img src={image} alt="user"/> 
     </div>
     :
    <div className="avatar placeholder">
       <div className="bg-neutral-focus text-neutral-content rounded-full w-16 ">
         <span className="text-xl">{placeholder}</span>
         </div>
         </div>
         }
</div>


  )
}

export default Avatar