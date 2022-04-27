import { isErrorResponse } from "@remix-run/react/data";
import { dbClient } from "~/services/dbClient";

export const createPitch = async (form: FormData) => {
  let ownerId: FormDataEntryValue | null =  form.get("ownerId");
  let pitchName: FormDataEntryValue | null =  form.get("productName");

  console.log("page one");

  let { data: pitch, error } = await dbClient.from("Pitch").insert({
    pitchName: pitchName,
    ownerId: ownerId,
  });
  if (pitch) {
    let {data, error} = await dbClient
      .from("Users")
      .update({ pitch: pitch[0].id })
      .match({ owner: ownerId });
 if (data) {
     return data[0]
 }
  }
  if (error) {
    return console.log(error);
  }
};



export const insertPageTwo = async (form: FormData) => {
  let ownerId: FormDataEntryValue | null = form.get("ownerId");
  let problemIntro: FormDataEntryValue | null = form.get("problemIntro");
  let problemInfo: FormDataEntryValue | null = form.get("problemInfo");

  console.log("page two");

  let { data: pitch, error } = await dbClient
    .from("Pitch")
    .update({
      p2TextIntro: problemIntro,
      p2TextInfo: problemInfo,
    })
    .match({ ownerId: ownerId });

  if (pitch) {
    console.log(pitch);
  }
  if (error) {
    console.log(error);
  }

  return pitch;
};
//TODO: rename "update"
export const insertPageThree = async (form: FormData) => {
  let ownerId: FormDataEntryValue | null = form.get("ownerId");
  let solutionIntro: FormDataEntryValue | null = form.get("solutionIntro");
  let solutionInfo: FormDataEntryValue | null = form.get("solutionInfo");

  console.log("page three");

  let { data: pitch, error } = await dbClient
    .from("Pitch")
    .update({
      p3TextIntro: solutionIntro,
      p3TextInfo: solutionInfo,
    })
    .match({ owner: ownerId });

  console.log(pitch);

  return pitch;
};
