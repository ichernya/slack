-- Dummy table --
DROP TABLE IF EXISTS dummy;
CREATE TABLE dummy(created TIMESTAMP WITH TIME ZONE);

-- Your database schema goes here --
DROP TABLE IF EXISTS users;
CREATE TABLE users(username TEXT NOT NULL, password TEXT NOT NULL, information jsonb);

DROP TABLE IF EXISTS workspace;
CREATE TABLE workspace(name VARCHAR(32));

DROP TABLE IF EXISTS channel;
CREATE TABLE channel(name VARCHAR(32));

DROP TABLE IF EXISTS messages;
CREATE TABLE messages(user VARCHAR(32), sent DATETIME, replies messages);


