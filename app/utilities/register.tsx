import { supabaseStrategy } from "~/services/auth.server";
import { dbClient } from "~/services/dbClient";
import { AuthorizationError } from "remix-auth";
export const registerSubmit = async ({form}) => {
    //variables for form input data
  let email = await form.get("email");
  let password1: any = await form.get("password1");
  let password2 = await form.get("password2");
  
//validate password inputs, if match: execute signUp and return user and session if there is no error
if (password1 !== password2) {
    console.log(password1, password2);
    throw AuthorizationError;
  } else {
  const { user, session, error} = await dbClient.auth.signUp({
    email: `${email}`,
    password: `${password1}`
  })
  if (error) return error

  return user?.id  
}
}