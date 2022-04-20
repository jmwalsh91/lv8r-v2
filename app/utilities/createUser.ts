import { dbClient } from "~/services/dbClient";

export const createUser = async ({ form }) => {
  //Values from formData
  let id: string = form.get("id");
  let username: string = form.get("username");
  let bio: string = form.get("bio");
  let category: string | null = await form.get("category")
  //init variable newUser which will be updated with return from db insert operation
  let newUser
  
  //Create new user with foreign key relation to "owner" in sb auth table
  //if checkbox was checked and value is in form, insert new row into User table
  if (category !== null ) {
  newUser = await dbClient.from("Users").insert([
    {
      username: `${username}`,
      bio: `${bio}`,
      owner: `${id}`,
      category: `${category}`
    },
  ]);
} 
//if checkbox was not checked, omit category from insert operation
if (!category) {
  newUser = await dbClient.from("Users").insert([
    {
      username: `${username}`,
      bio: `${bio}`,
      owner: `${id}`,
    },
  ]);
}

  console.log(newUser);
  //return data from insert into db
  return newUser;
};
