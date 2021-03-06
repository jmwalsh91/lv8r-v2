import { isErrorResponse } from "@remix-run/react/data";
import { PostgrestResponse } from "@supabase/supabase-js";
import { dbClient } from "~/services/dbClient";

export const createPitch = async (form: FormData) => {
  let ownerId: FormDataEntryValue | null = form.get("ownerId");
  let pitchName: FormDataEntryValue | null = form.get("productName");

  console.log("page one");

  let { data: pitch, error } = await dbClient.from("Pitch").insert({
    pitchName: pitchName,
    ownerId: ownerId,
  });
  if (pitch) {
    let { data, error } = await dbClient
      .from("Users")
      .update({ pitch: pitch[0].id })
      .match({ owner: ownerId });
    if (data) {
      return data[0];
    }
  }
  if (error) {
    if (error) return Error(error.message)
  }
};

export const updatePitchP2 = async (form: FormData) => {
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
export const updatePitchP3 = async (form: FormData) => {
  let ownerId: FormDataEntryValue | null = form.get("ownerId");
  let solutionIntro: FormDataEntryValue | null = form.get("solutionIntro");
  let solutionInfo: FormDataEntryValue | null = form.get("solutionInfo");

  console.log("page three");
  console.log(solutionInfo + " " + solutionIntro + ownerId);

  let { data: pitch, error } = await dbClient
    .from("Pitch")
    .update({
      p3Text1: solutionIntro,
      p3Text2: solutionInfo,
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

export const updatePitchP4 = async (form: FormData) => {
  let ownerId: FormDataEntryValue | null = form.get("ownerId");
  let demoIntro: FormDataEntryValue | null = form.get("demoIntro");
  let demoInfo: FormDataEntryValue | null = form.get("demoInfo");

  console.log("page four");

  let { data: pitch, error } = await dbClient
    .from("Pitch")
    .update({
      p4Text1: demoIntro,
      p4Text2: demoInfo,
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
