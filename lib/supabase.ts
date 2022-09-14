import env from "./env.ts";
import { supabase } from "../deps.ts";

const client = supabase(
  env["SUPABASE_URL"],
  env["SUPABASE_KEY"]
);

export default client;
