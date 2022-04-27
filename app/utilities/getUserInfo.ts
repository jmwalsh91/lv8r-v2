import { isErrorResponse } from "@remix-run/react/data";
import { UserObj } from "~/interfaces";
import { dbClient } from "~/services/dbClient";

export const getUsername = async (userId: string) => {
  let idArg = userId;

  //get User's username where email returned from authenticator matches User's email.
  let { data, error } = await dbClient
    .from("Users")
    .select("username")
    .match({ owner: idArg });

  console.log(data?.[0].username);
  //if error TODO: throw authorizationError
  if (error) return console.log(error);
  //if data return data
  if (data) return data[0].username;
};

export const getUserFromParams = async (paramsUsername: string | undefined) => {
  let user: UserObj;
  if (paramsUsername) {
    let usernameFromLoader: string = paramsUsername;
    console.log(usernameFromLoader);
    //get User's username where email returned from authenticator matches User's email.
    let { data, error } = await dbClient
      .from("Users")
      .select(
        "id, username, category, bio, pitch, encountered_pitches, received_cards, sent_cards, owner"
      )
      .match({ username: `${usernameFromLoader}` });

    user = data?.[0];
    console.log(user);
    //if error TODO: throw authorizationError
    if (error) return console.log(error);
    //if data return data
    if (data) return user;
  } else throw Error;
};



export const getUserFromId = async (ownerId: string | undefined) => {
  let user: UserObj;
  if (ownerId) {
    
    //Get User data by matching the ID of authUser from sessionsData to ownerId col in Users table
    let { data, error } = await dbClient
      .from("Users")
      .select(
        "id, username, category, bio, pitch, encountered_pitches, received_cards, sent_cards, owner"
      )
      .match({ ownerId: ownerId });

    user = data?.[0];
    console.log(user);
    //if error TODO: throw authorizationError
    if (error) return console.log(error);
    //if data return data
    if (data) return user;
  } else throw Error;
};

