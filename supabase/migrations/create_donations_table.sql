/*
  # Create donations table

  1. New Tables
    - `donations`
      - `id` (uuid, primary key)
      - `fan_id` (uuid, references users.id)
      - `musician_id` (uuid, references musicians.id)
      - `song_id` (uuid, references songs.id, optional)
      - `amount` (numeric)
      - `platform_fee` (numeric)
      - `artist_payout` (numeric)
      - `personal_message` (text, optional)
      - `donation_date` (timestamptz)
      - `payment_status` (text)
      - `show_id` (uuid, references shows.id, optional)
  2. Security
    - Enable RLS on `donations` table
    - Add policy for fans to read their own donations
    - Add policy for musicians to read donations made to them
    - Add policy for fans to create donations
*/

CREATE TABLE IF NOT EXISTS donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  fan_id uuid NOT NULL REFERENCES users(id),
  musician_id uuid NOT NULL REFERENCES musicians(id),
  song_id uuid REFERENCES songs(id),
  amount numeric NOT NULL,
  platform_fee numeric NOT NULL,
  artist_payout numeric NOT NULL,
  personal_message text,
  donation_date timestamptz DEFAULT now(),
  payment_status text NOT NULL CHECK (payment_status IN ('pending', 'complete', 'failed')),
  show_id uuid
);

ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Fans can read their own donations"
  ON donations
  FOR SELECT
  TO authenticated
  USING (auth.uid() = fan_id);

CREATE POLICY "Musicians can read donations made to them"
  ON donations
  FOR SELECT
  TO authenticated
  USING (auth.uid() = musician_id);

CREATE POLICY "Fans can create donations"
  ON donations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = fan_id);
