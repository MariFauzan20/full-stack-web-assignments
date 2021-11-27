-- Show Database --
SHOW DATABASES;

-- Create Database --
CREATE DATABASE bookstore;

-- Use Database --
USE bookstore;

-- Show Table --
SHOW TABLES;

-- Create Table 'books' --
CREATE TABLE books (
    id INT AUTO_INCREMENT,
    author1 VARCHAR(100) NOT NULL,
    author2 VARCHAR(100),
    author3 VARCHAR(100),
    title VARCHAR(100),
    description TEXT,
    place_sell VARCHAR(3),
    stock INT DEFAULT 0,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (id)
);

-- Update Column Table 'books' --
ALTER TABLE books ADD price INT DEFAULT 0;

ALTER TABLE books ADD status ENUM('available', 'out of stock', 'limited');

ALTER TABLE books DROP COLUMN place_sell;

-- Insert Data --
INSERT INTO books (author1, author2, author3, title, description, stock, price, status) VALUES('Ian Goodfellow', 'Yoshua Bengio', 'Aaron Courville', 'Deep Learning', 'An introduction to a broad range of topics in deep learning, covering mathematical and conceptual background, deep learning techniques used in industry, and research perspectives.', 50, 500, 'available');

INSERT INTO books (author1, author2, title, description, stock, price, status) VALUES('Shai Shalev-Shwartz', 'Shai Ben-David', 'Understanding Machine Learning', 'Machine learning is one of the fastest growing areas of computer science, with far-reaching applications. The aim of this textbook is to introduce machine learning, and the algorithmic paradigms it offers, in a principled way.', 50, 300, 'limited');

INSERT INTO books (author1, title, description, stock, price, status) VALUES('Stephen Marsland', 'Machine Learning An Algorithmic Perspective', 'Traditional books on machine learning can be divided into two groups — those aimed at advanced undergraduates or early postgraduates with reasonable mathematical knowledge and those that are primers on how to code algorithms.', 10, 300, 'limited');

-- SELECT semua row pada table books --
SELECT * FROM books;

-- SELECT menggunakan ALIAS. Column id digantikan ID, author1 digantikan A1, author2 digantikan A2, author3 digantikan A3 --
SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3 FROM books;

-- SELECT data menggunakan WHERE untuk id tertentu --
SELECT * FROM books WHERE id = 2;

-- SELECT data menggunakan WHERE untuk dengan operator logical AND --
SELECT * FROM books WHERE price = 300 AND status = 'limited';

-- SELECT data menggunakan WHERE untuk dengan operator logical OR --
SELECT * FROM books WHERE stock <= 50 OR stock >= 10;

-- SELECT data menggunakan WHERE untuk dengan operator logical NOT --
SELECT * FROM books WHERE status != 'limited';

-- SELECT seluruh column dari table bookstore dan diurutkan secara ASC berdasarkan id --
SELECT * FROM books ORDER BY id ASC;

-- SELECT seluruh column dan berikan LIMIT untuk 2 row saja --
SELECT * FROM books LIMIT 2;

-- Pilih 1 row untuk dilakukan UPDATE pada column author1 dan price --
UPDATE books
SET author1 = 'John Thor', price = 999
WHERE id = 2;

-- Pilih 1 row untuk dilakukan DELETE --
DELETE FROM books WHERE id = 2;