import { isErrorResponse } from "@remix-run/react/data";
import { dbClient } from "~/services/dbClient";

export const getUsername = async (userId: string ) => {
let idArg = userId
    
    //get User's username where email returned from authenticator matches User's email.
    let {data, error} = await dbClient.from("Users")
    .select("username")
    .match({owner: idArg})
    
    console.log(data?.[0].username);
    //if error TODO: throw authorizationError
    if (error) return console.log(error)
    //if data return data
    if (data) return data[0].username

  };
  
  export const getUser = async (paramsUsername: string | undefined ) => {
    if (paramsUsername) {
      let usernameFromLoader: string = paramsUsername
        console.log(usernameFromLoader)
        //get User's username where email returned from authenticator matches User's email.
        let {data, error} = await dbClient.from("Users")
        .select("id, username, bio, pitch, encountered_pitches, received_cards, sent_cards, owner")
        .match({username: `${usernameFromLoader}`})
        console.log("data")
        console.log(data?.[0]);
        //if error TODO: throw authorizationError
        if (error) return console.log(error)
        //if data return data
        if (data) return data[0]
    } else throw Error 

      };
      