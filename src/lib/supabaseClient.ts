import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jdypaulgraaxyumyyeqw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkeXBhdWxncmFheHl1bXl5ZXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyODM0MjIsImV4cCI6MjA2Mjg1OTQyMn0.d80ue8SFjaQ1HC1m1oJxQjIxIafBWksMzTDynmhAzLc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
