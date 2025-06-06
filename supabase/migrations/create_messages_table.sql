/*
  # Create messages table

  1. New Tables
    - `messages`
      - `id` (uuid, primary key)
      - `from_user_id` (uuid, references users.id)
      - `to_user_id` (uuid, references users.id)
      - `message_content` (text)
      - `sent_date` (timestamptz)
      - `read_status` (boolean, default false)
      - `message_type` (text)
  2. Security
    - Enable RLS on `messages` table
    - Add policy for users to read messages they sent or received
    - Add policy for users to create messages
*/

CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  from_user_id uuid NOT NULL REFERENCES users(id),
  to_user_id uuid NOT NULL REFERENCES users(id),
  message_content text NOT NULL,
  sent_date timestamptz DEFAULT now(),
  read_status boolean DEFAULT false,
  message_type text CHECK (message_type IN ('thank_you', 'general', 'support'))
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read messages they sent or received"
  ON messages
  FOR SELECT
  TO authenticated
  USING (auth.uid() = from_user_id OR auth.uid() = to_user_id);

CREATE POLICY "Users can create messages"
  ON messages
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = from_user_id);

CREATE POLICY "Users can update read status of received messages"
  ON messages
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = to_user_id)
  WITH CHECK (
    auth.uid() = to_user_id AND
    (OLD.read_status IS DISTINCT FROM NEW.read_status)
  );
