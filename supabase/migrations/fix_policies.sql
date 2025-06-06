/*
  # Fix policies with incorrect "old" references

  1. Changes
    - Drop problematic policies that reference "old" without proper context
    - Recreate policies with correct syntax
  2. Security
    - Maintain same security model but with corrected syntax
*/

-- Drop problematic policies
DROP POLICY IF EXISTS "Musicians can update own data" ON musicians;
DROP POLICY IF EXISTS "Musicians can read own data" ON musicians;

-- Recreate policies with correct syntax
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
