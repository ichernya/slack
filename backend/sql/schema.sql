-- Dummy table --
DROP TABLE IF EXISTS dummy;

CREATE TABLE dummy(created TIMESTAMP WITH TIME ZONE);

-- Your database schema goes here --
DROP TABLE IF EXISTS users;

CREATE TABLE users(username TEXT NOT NULL, passhash TEXT NOT NULL, information jsonb);

DROP TABLE IF EXISTS workspace;

CREATE TABLE workspace(name VARCHAR(32));

DROP TABLE IF EXISTS channel;

CREATE TABLE channel(name VARCHAR(32));

DROP TABLE IF EXISTS messages;

CREATE TABLE messages(workspaceIn VARCHAR(32),
 curuser VARCHAR(32),
sent TIMESTAMP WITHOUT TIME ZONE,
replies SMALLINT
messagebody VARCHAR(32));
