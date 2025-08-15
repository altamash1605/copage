// src/supabase/client.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://amzpijkhtwkimdyuiiox.supabase.co'; // your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtenBpamtodHdraW1keXVpaW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyMDkwODgsImV4cCI6MjA3MDc4NTA4OH0.Z0mahIN_tKX6P1sxrepvzDDGqV0rTCYFvuzrK3bpXDU'; // your anon/public API key (not the service role key)

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
