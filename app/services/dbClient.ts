import { createClient } from '@supabase/supabase-js'



//instantiate a client for supabase db
export const dbClient = createClient('https://lwpgjswuelupmodiahxn.supabase.com', 'public-anon-key')