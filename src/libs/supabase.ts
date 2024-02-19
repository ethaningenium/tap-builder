import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ulbioypgkplxvjmobkey.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsYmlveXBna3BseHZqbW9ia2V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyODYyODksImV4cCI6MjAyMzg2MjI4OX0.N9yzEtAlYTbYqpwy0YXx6VlOb9oC1uZ1JynggpwHRqM";

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const bucket = supabase.storage
  .from("tap-images")
  .upload("logo.png", "logo.png");
