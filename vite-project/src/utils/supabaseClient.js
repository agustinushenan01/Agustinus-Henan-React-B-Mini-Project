import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://hcpkytmpbxvwoywiksxf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjcGt5dG1wYnh2d295d2lrc3hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5Mjk1OTMsImV4cCI6MjAzMDUwNTU5M30.hcf3zqgE3j15ILRFAS5gQo07wd9z45ViySroBNLqLGU";
export const supabase = createClient(supabaseUrl, supabaseKey);