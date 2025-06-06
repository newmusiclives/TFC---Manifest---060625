/*
  # Create songs table

  1. New Tables
    - `songs`
      - `id` (uuid, primary key)
      - `musician_id` (uuid, references musicians.id)
      - `title` (text)
      - `audio_file_url` (text)
      - `duration` (numeric)
      - `genre` (text)
      - `description` (text, optional)
      - `upload_date` (timestamptz)
      - `play_count` (integer, default 0)
      - `total_donations` (integer, default 0)
  2. Security
    - Enable RLS on `songs` table
    - Add policy for musicians to manage their own songs
    - Add policy for public to read songs
*/

CREATE TABLE IF NOT EXISTS songs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  musician_id uuid NOT NULL REFERENCES musicians(id),
  title text NOT NULL,
  audio_file_url text NOT NULL,
  duration numeric NOT NULL,
  genre text NOT NULL,
  description text,
  upload_date timestamptz DEFAULT now(),
  play_count integer DEFAULT 0,
  total_donations integer DEFAULT 0
);

ALTER TABLE songs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Musicians can manage their own songs"
  ON songs
  FOR ALL
  TO authenticated
  USING (auth.uid() = musician_id);

CREATE POLICY "Public can read songs"
  ON songs
  FOR SELECT
  TO anon
  USING (true);
