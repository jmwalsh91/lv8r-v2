import { isErrorResponse } from "@remix-run/react/data";
import { dbClient } from "~/services/dbClient";

export const createPitch = async (form: FormData) => {
  let ownerId: FormDataEntryValue | null = await form.get("ownerId");
  let pitchName: FormDataEntryValue | null = await form.get("productName");

  console.log("page one");

  let { data: pitch, error } = await dbClient.from("Pitch").insert({
    pitchName: pitchName,
  });
  if (pitch) {
    let updatedUser = await dbClient
      .from("Users")
      .update({ pitch: pitch[0].id })
      .match({ owner: ownerId });
    console.log(updatedUser);
    return updatedUser;
  }
  if (error) {
    return console.log(error);
  }
};

export const insertPageTwo = async (form: FormData) => {
  let ownerId: FormDataEntryValue | null = await form.get("ownerId");
  let problemIntro: FormDataEntryValue | null = await form.get("problemIntro");
  let problemInfo: FormDataEntryValue | null = await form.get("problemInfo");

  console.log("page two");

  let { data: pitch, error } = await dbClient
    .from("Pitch")
    .insert({
      p2TextIntro: problemIntro,
      p2TextInfo: problemInfo,
    })
    .match({ owner: ownerId });

    console.log(pitch)

    return pitch 

};
