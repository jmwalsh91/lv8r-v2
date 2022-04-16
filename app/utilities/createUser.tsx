import { dbClient } from "~/services/dbClient";
import { AuthorizationError } from "remix-auth";

export const createUser = async ({ form }) => {
  //Values from formData
  let username: String = form.get("username");
  let bio: String = form.get("bio");
  let id: String = form.get("id");
  
  //Create new user with foreign key relation to "owner" in sb auth table
  let newUser = await dbClient.from("Users").insert([
    {
      username: `${username}`,
      bio: `${bio}`,
      owner: `${id}`,
    },
  ]);

  console.log(newUser);
  //return data from insert into db
  return newUser;
};
