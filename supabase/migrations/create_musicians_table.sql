/*
  # Create musicians table

  1. New Tables
    - `musicians`
      - `id` (uuid, primary key, references users.id)
      - `stage_name` (text)
      - `genre` (text array)
      - `manifest_financial_account_id` (text)
      - `total_lifetime_earnings` (numeric, default 0)
      - `monthly_goal` (numeric)
      - `social_media_links` (jsonb, optional)
      - `booking_email` (text, optional)
      - `qr_code` (text, optional)
  2. Security
    - Enable RLS on `musicians` table
    - Add policy for authenticated users to read their own data
    - Add policy for authenticated users to update their own data
    - Add policy for public to read musician profiles
*/

CREATE TABLE IF NOT EXISTS musicians (
  id uuid PRIMARY KEY REFERENCES users(id),
  stage_name text NOT NULL,
  genre text[] DEFAULT ARRAY['Music'],
  manifest_financial_account_id text NOT NULL,
  total_lifetime_earnings numeric DEFAULT 0,
  monthly_goal numeric DEFAULT 500,
  social_media_links jsonb,
  booking_email text,
  qr_code text
);

ALTER TABLE musicians ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Musicians can read own data"
  ON musicians
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Musicians can update own data"
  ON musicians
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Public can read musician profiles"
  ON musicians
  FOR SELECT
  TO anon
  USING (true);
