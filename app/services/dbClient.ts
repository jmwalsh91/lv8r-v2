import { createClient } from '@supabase/supabase-js'
const sbURL = `${process.env.SUPABASE_URL}`
const sbKey = `${process.env.SUPABASE_KEY}`


//instantiate a client for supabase db
export const dbClient = createClient(sbURL, sbKey)