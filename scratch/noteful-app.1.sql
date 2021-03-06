-- Notes table and relationships

DROP TABLE IF EXISTS notes;

CREATE TABLE notes (
  id serial PRIMARY KEY,
  title text NOT NULL,
  content text,
  created timestamp DEFAULT current_timestamp,
  folder_id int REFERENCES folders(id) ON DELETE SET NULL
);

ALTER SEQUENCE notes_id_seq RESTART 1000;

INSERT INTO notes (title, content, folder_id)
   VALUES  
      ('Article 1', 'Content 1', 100),
			('Article 2', 'Content 2', 101),
			('Article 3', 'Content 3', 102),
			('Article 4', 'Content 4', 103),
			('Article 5', 'Content 5', 104);

-- Folder table and relationships

DROP TABLE IF EXISTS folders;

CREATE TABLE folders (
    id serial PRIMARY KEY,
    folderName text NOT NULL,
);

ALTER SEQUENCE folders_id_seq RESTART WITH 100;

INSERT INTO folders (folderName) 
  VALUES
    ('Archive'),
    ('Drafts'),
    ('Personal'),
    ('Work');

-- Tags table and reationships

DROP TABLE IF EXISTS tags;

CREATE TABLE tags (
  id serial PRIMARY KEY,
  tagname text NOT NULL
);

INSERT INTO tags (tagname)
  VALUES
    ('Dope'),
    ('Not Dope'),
    ('Dopest'),
    ('Hella Dope');

DROP TABLE IF EXISTS notes_tags;

CREATE TABLE notes_tags (
  note_id INTEGER NOT NULL REFERENCES notes ON DELETE CASCADE,
  tag_id INTEGER NOT NULL REFERENCES tags ON DELETE CASCADE
);

INSERT INTO notes_tags (note_id, tag_id) 
  VALUES 
  (1,1),
  (2,2),
  (3,3),
  (4,4);