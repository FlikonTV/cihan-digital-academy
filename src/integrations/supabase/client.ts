import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://iqijmfgofbzmlkdjmkoh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxaWptZmdvZmJ6bWxrZGpta29oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4NzgzNTksImV4cCI6MjAyNTQ1NDM1OX0.OypcGQ7NMDpeItrGRH5Nj9FyY0TXYuoktn7FmoKlZtk";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});