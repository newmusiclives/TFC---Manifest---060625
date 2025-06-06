/*
  # Create shows table

  1. New Tables
    - `shows`
      - `id` (uuid, primary key)
      - `musician_id` (uuid, references musicians.id)
      - `venue_name` (text)
      - `venue_address` (text)
      - `show_date` (timestamptz)
      - `total_attendees` (integer, default 0)
      - `total_donations` (numeric, default 0)
      - `qr_code_scans` (integer, default 0)
      - `status` (text)
  2. Security
    - Enable RLS on `shows` table
    - Add policy for musicians to manage their own shows
    - Add policy for public to read shows
*/

CREATE TABLE IF NOT EXISTS shows (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  musician_id uuid NOT NULL REFERENCES musicians(id),
  venue_name text NOT NULL,
  venue_address text NOT NULL,
  show_date timestamptz NOT NULL,
  total_attendees integer DEFAULT 0,
  total_donations numeric DEFAULT 0,
  qr_code_scans integer DEFAULT 0,
  status text NOT NULL CHECK (status IN ('upcoming', 'active', 'complete', 'cancelled'))
);

ALTER TABLE shows ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Musicians can manage their own shows"
  ON shows
  FOR ALL
  TO authenticated
  USING (auth.uid() = musician_id);

CREATE POLICY "Public can read shows"
  ON shows
  FOR SELECT
  TO anon
  USING (true);

-- Add foreign key constraint to donations table for show_id
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'donations_show_id_fkey'
  ) THEN
    ALTER TABLE donations 
    ADD CONSTRAINT donations_show_id_fkey 
    FOREIGN KEY (show_id) 
    REFERENCES shows(id);
  END IF;
END $$;
