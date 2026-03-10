import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';            

dotenv.config();

console.log('Supabase URL:', process.env.SUPABASE_URL);
console.log('Supabase Key:', process.env.SUPABASE_KEY ? 'Loaded' : 'Not Loaded');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_KEY in .env');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;