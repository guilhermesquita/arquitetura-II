-- Active: 1674572032280@@127.0.0.1@3306
CREATE TABLE videos (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    title TEXT NOT NULL,
    duration REAL NOT NULL,
    upload_data TEXT DEFAULT (DATETIME('now')) NOT NULL
);

DROP TABLE videos;

SELECT * FROM videos;