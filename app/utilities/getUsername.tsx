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
  