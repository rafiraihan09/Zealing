import { createClient } from '@supabase/supabase-js'

// Replace these with your actual Supabase project details
const supabaseUrl = 'https://qhbswmltpffsxmwvnpqa.supabase.co' // Looks like: https://xxxxx.supabase.co
const supabaseAnonKey = 'sb_publishable_VpiEXmf3NRPmHetqup_6mg_hPLOpygY' // Looks like: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

export const supabase = createClient(supabaseUrl, supabaseAnonKey)