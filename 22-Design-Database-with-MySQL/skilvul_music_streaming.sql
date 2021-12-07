-- Create Database --
CREATE DATABASE skilvul_music_streaming;

-- Create Table 'user' --
CREATE TABLE user (
    user_id INT(10) AUTO_INCREMENT NOT NULL,
    name VARCHAR(50),
    email VARCHAR(255),
    password VARCHAR(255),
    PRIMARY KEY (user_id)
);

-- Create Table 'singer' --
CREATE TABLE singer (
    singer_id INT(10) AUTO_INCREMENT NOT NULL,
    name VARCHAR(50),
    PRIMARY KEY (singer_id)
);

-- Create Table 'album' --
CREATE TABLE album (
    album_id INT(10) AUTO_INCREMENT NOT NULL,
    singer_id INT(10),
    name VARCHAR(50),
    PRIMARY KEY (album_id),
    FOREIGN KEY (singer_id) REFERENCES singer(singer_id),
);

-- Create Table 'playlist' --
CREATE TABLE playlist (
    playlist_id INT(10) AUTO_INCREMENT NOT NULL,
    user_id INT(10),
    tracks INT(10),
    PRIMARY KEY (playlist_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
);

-- Create Table 'track' --
CREATE TABLE track (
    track_id INT(10) AUTO_INCREMENT NOT NULL,
    singer_id INT(10),
    album_id INT(10),
    title VARCHAR(50),
    PRIMARY KEY (track_id),
    FOREIGN KEY (singer_id) REFERENCES singer(singer_id),
    FOREIGN KEY (album_id) REFERENCES album(album_id)
);
