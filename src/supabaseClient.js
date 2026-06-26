import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tzjqzpoqgegyfvovlovr.supabase.co'
const supabaseKey = 'sb_publishable_8fbYgTeoNsjtNu9Hd6a1DA_3BBrGyCc'

export const supabase = createClient(supabaseUrl, supabaseKey)
