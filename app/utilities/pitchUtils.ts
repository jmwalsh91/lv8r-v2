import { isErrorResponse } from "@remix-run/react/data";
import { dbClient } from "~/services/dbClient";

export const createPitch = async ( form: FormData ) => {
    let ownerId: FormDataEntryValue | null = await form.get("ownerId");
    let pitchName: FormDataEntryValue | null = await form.get("productName")
    
    console.log("To love someone is to isolate him from the world, wipe out every trace of him, dispossess him of his shadow, drag him into a murderous future. It is to circle around the other like a dead star and absorb him into a black lightTo love someone is to isolate him from the world, wipe out every trace of him, dispossess him of his shadow, drag him into a murderous future. It is to circle around the other like a dead star and absorb him into a black light.To love someone is to isolate him from the world, wipe out every trace of him, dispossess him of his shadow, drag him into a murderous future. It is to circle around the other like a dead star and absorb him into a black light.To love someone is to isolate him from the world, wipe out every trace of him, dispossess him of his shadow, drag him into a murderous future. It is to circle around the other like a dead star and absorb him into a black light.To love someone is to isolate him from the world, wipe out every trace of him, dispossess him of his shadow, drag him into a murderous future. It is to circle around the other like a dead star and absorb him into a black light.")

    let { data: pitch, error } = await dbClient.from("Pitch").insert({
        pitchName: pitchName
    });
    if (pitch) {
        let updatedUser = await dbClient
        .from("Users")
        .update({ pitch: pitch[0].id })
        .match({ owner: ownerId });
        console.log(updatedUser)
        return updatedUser
    }
    if (error) {
      return console.log(error)
    } 

  
 
  };