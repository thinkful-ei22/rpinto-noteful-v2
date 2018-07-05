-- SELECT CURRENT_DATE;

-- Start from scratch, delete old notes table
DROP TABLE IF EXISTS notes;

-- Create table
CREATE TABLE notes (
  id serial PRIMARY KEY,
  title text NOT NULL,
  content text,
  created timestamp DEFAULT current_timestamp
);

-- Init ID values at 1000
ALTER SEQUENCE notes_id_seq RESTART 1000;

-- Add some test data
INSERT INTO notes (title, content)
   VALUES  ('Article 1', 'Content 1'),
			('Article 2', 'Content 2'),
			('Article 3', 'Content 3'),
			('Article 4', 'Content 4'),
			('Article 5', 'Content 5');