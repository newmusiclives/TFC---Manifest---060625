/*
  # Create users table

  1. New Tables
    - `users`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `user_type` (text, either 'musician', 'fan', or 'admin')
      - `name` (text)
      - `profile_photo` (text, optional)
      - `bio` (text, optional)
      - `location` (text, optional)
      - `created_at` (timestamptz)
      - `last_active` (timestamptz)
      - `account_status` (text, either 'active' or 'suspended')
  2. Security
    - Enable RLS on `users` table
    - Add policy for authenticated users to read their own data
    - Add policy for authenticated users to update their own data
*/

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY,
  email text UNIQUE NOT NULL,
  user_type text NOT NULL CHECK (user_type IN ('musician', 'fan', 'admin')),
  name text NOT NULL,
  profile_photo text,
  bio text,
  location text,
  created_at timestamptz DEFAULT now(),
  last_active timestamptz DEFAULT now(),
  account_status text NOT NULL DEFAULT 'active' CHECK (account_status IN ('active', 'suspended'))
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own data"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Public can read user profiles"
  ON users
  FOR SELECT
  TO anon
  USING (account_status = 'active');
