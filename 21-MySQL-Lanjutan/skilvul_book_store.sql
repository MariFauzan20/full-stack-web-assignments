-- Show Database --
SHOW DATABASES;

-- Create Database --
CREATE DATABASE skilvulbookstore;

-- Create Table 'penerbit' --
CREATE TABLE penerbit (
    id INT(10) AUTO_INCREMENT NOT NULL,
    nama VARCHAR(50),
    kota VARCHAR(50),
    PRIMARY KEY (id)
);

-- Create Table 'penulis' --
CREATE TABLE penulis (
    id INT(10) AUTO_INCREMENT NOT NULL,
    nama VARCHAR(50),
    kota VARCHAR(50),
    PRIMARY KEY (id)
);

-- Create Table 'buku' --
CREATE TABLE buku (
    id INT(10) AUTO_INCREMENT NOT NULL,
    ISBN VARCHAR(50),
    judul VARCHAR(50),
    penulis VARCHAR(50),
    penerbit INT(10),
    harga INT(10),
    stock INT(10),
    PRIMARY KEY (id)
);

-- Insert Data --
INSERT INTO penerbit (nama, kota) VALUES('Gramedia Pustaka Utama', 'Jakarta');
INSERT INTO penerbit (nama, kota) VALUES('Mizan Pustaka', 'Bandung');

INSERT INTO penulis (nama, kota) VALUES('Dewi Lestari', 'Bandung');
INSERT INTO penulis (nama, kota) VALUES('Andrea Hirata', 'Gantung');
INSERT INTO penulis (nama, kota) VALUES('Eka Kurniawan', 'Tasikmalaya');

INSERT INTO buku (ISBN, judul, penulis, penerbit, harga, stock) VALUES('342122', 'Supernova 1', 1, 1, 79000, 83);
INSERT INTO buku (ISBN, judul, penulis, penerbit, harga, stock) VALUES('522142', 'Filosofi Kopi', 1, 1, 59000, 93);
INSERT INTO buku (ISBN, judul, penulis, penerbit, harga, stock) VALUES('167132', 'Rectoverso', 1, 1, 99000, 43);

INSERT INTO buku (ISBN, judul, penulis, penerbit, harga, stock) VALUES('849372', 'Orang-orang biasa', 2, 2, 83000, 103);
INSERT INTO buku (ISBN, judul, penulis, penerbit, harga, stock) VALUES('738246', 'Ayah', 2, 1, 83000, 103);
INSERT INTO buku (ISBN, judul, penulis, penerbit, harga, stock) VALUES('892348', 'Padang Bulan', 2, 2, 83000, 103);

INSERT INTO buku (ISBN, judul, penulis, penerbit, harga, stock) VALUES('324524', 'Cantik Itu Luka', 3, 2, 56000, 56);
INSERT INTO buku (ISBN, judul, penulis, penerbit, harga, stock) VALUES('347652', 'Lelaki Harimau', 3, 2, 78000, 68);
INSERT INTO buku (ISBN, judul, penulis, penerbit, harga, stock) VALUES('843736', 'Seperti Dendam, Rindu Harus Dibayar Tuntas', 3, 1, 53000, 45);

-- Lakukan INNER JOIN dari table buku terhadap table penerbit --
SELECT *
FROM buku
INNER JOIN penerbit
ON buku.penerbit = penerbit.id;

-- Lakukan LEFT JOIN dari table buku terhadap table penerbit --
SELECT *
FROM buku
LEFT JOIN penerbit
ON buku.penerbit = penerbit.id;

-- Lakukan RIGHT JOIN dari table buku terhadap table penerbit --
SELECT *
FROM buku
RIGHT JOIN penerbit
ON buku.penerbit = penerbit.id;

-- Cek nilai MAX dari column harga pada table book yang memiliki jumlah stok buku di bawah 10 --
SELECT MAX(harga)
FROM buku
WHERE stock < 10;

-- Cek nilai MIN dari column harga pada table book --
SELECT MIN(harga) FROM buku;

-- Gunakan COUNT untuk melihat list data dengan kondisi harga buku di bawah 100000 --
SELECT COUNT(*) AS "Harga Buku di Bawah 100000"
FROM buku
WHERE harga < 100000;
