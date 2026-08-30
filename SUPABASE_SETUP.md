# Supabase Setup Guide for Bruniverse 🐾

Follow these steps to connect your website to Supabase and store your pet parent data.

## Step 1: Create a Supabase Project
1. Go to [Supabase.com](https://supabase.com/) and sign in.
2. Click **"New Project"**.
3. Give it a name (e.g., `Bruniverse`) and set a secure database password.
4. Wait for the project to finish setting up (usually takes 1-2 minutes).

---

## Step 2: Set Up the Database Tables
Once your project is ready, go to the **SQL Editor** (icon on the left sidebar) and click **"New Query"**. Copy and paste the following code to create your tables:

```sql
-- 1. Create Registrations Table
CREATE TABLE registrations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  city text
);

-- 2. Create Pet Parent Survey Table
CREATE TABLE pet_parents_survey (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  pet_type text NOT NULL,
  pet_age text,
  pet_breed text,
  buy_most_often text,
  where_shop text,
  monthly_spend text,
  biggest_struggle text,
  products_love_more text,
  curated_boxes text,
  subscribe_reason text,
  instagram text,
  stay_updated text,
  whatsapp text,
  email text -- Used to link surveys to logged-in users
);

-- 3. Enable Public Access (Turn off Row Level Security for testing)
-- Note: In production, you should set up proper RLS policies!
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE pet_parents_survey ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON registrations FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert" ON pet_parents_survey FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin read" ON registrations FOR SELECT USING (true); -- Restricted in real apps
CREATE POLICY "Allow admin read" ON pet_parents_survey FOR SELECT USING (true);
```

Click **"Run"** to execute the code.

---

## Step 3: Connect the Website
1. Go to **Project Settings** (gear icon) -> **API**.
2. Copy your **Project URL** and **anon public key**.
3. Create a file named `.env` in the root of your project folder (if it doesn't exist).
4. Paste your keys like this:

```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

---

## Step 4: Enable Auth Providers (Mandatory)
If you want users to log in to their pet profiles:

### Email Auth:
1. Go to **Authentication** -> **Providers** -> **Email**.
2. Ensure **Enabled** is ON.
3. **Confirm Email**: If you want to skip email verification during testing, turn **Confirm email** OFF.

### Phone Auth:
1. Go to **Authentication** -> **Providers** -> **Phone**.
2. Ensure **Enabled** is ON.
3. You will need an SMS provider (like Twilio) for real SMS, but you can use **Phone testing numbers** for development.
4. Go to **Authentication** -> **Configuration** and add a test phone number and a test OTP code (e.g., `+919999999999` and `123456`).

---

## Done! 🎉
Your website is now connected. When someone fills out the registration form or survey, the data will appear in your Supabase **Table Editor**.
