require("dotenv").config(); // Add this line to load dotenv

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY?.trim();

export const supabase = createClient(supabaseUrl, supabaseKey);