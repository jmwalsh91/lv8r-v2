import { isErrorResponse } from "@remix-run/react/data";
import { dbClient } from "~/services/dbClient";

export const createPitch = async ({ form }) => {
    let userId: string = await form.get("userId");
    let pitchName: string = await form.get("name")
    
    
    let { data: pitch, error } = await dbClient.from("Pitches").insert({
        pitchName: pitchName
    });
    if (error) {
      throw isErrorResponse("Something went wrong");
    }
    console.log(pitch)
  /* 
     let updatedUser = await dbClient
      .from("Users")
      .update({ pitch: pitch[0].id })
      .match({ id: pitchOwner[0].id }); */
  
 return 
  };