-- Dummy table --
DROP TABLE IF EXISTS dummy;

CREATE TABLE dummy(created TIMESTAMP WITH TIME ZONE);

-- Your database schema goes here --
DROP TABLE IF EXISTS users;

CREATE TABLE users( username VARCHAR(32), passhash VARCHAR(32), information jsonb);

DROP TABLE IF EXISTS workspace;

CREATE TABLE workspace ( workspaceName VARCHAR(32));

DROP TABLE IF EXISTS channel;

CREATE TABLE channel (curWorkspace VARCHAR(32), channelName VARCHAR(32));

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (curChannel VARCHAR(32), curuser VARCHAR(32), sentTime TIMESTAMP WITHOUT TIME ZONE, replies SMALLINT, messagebody VARCHAR(32));
