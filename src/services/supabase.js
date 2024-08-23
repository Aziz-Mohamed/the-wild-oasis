import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://magknqkrosrsctmpbrvf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hZ2tucWtyb3Nyc2N0bXBicnZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyODE4NzAsImV4cCI6MjAzOTg1Nzg3MH0.g2hZu9K9bcgwF3VShFAr4Jjdqb5YLQvCSpLA4SF2l80";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;