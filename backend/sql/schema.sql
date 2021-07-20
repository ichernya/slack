-- Dummy table --
DROP TABLE IF EXISTS dummy;

CREATE TABLE dummy(created TIMESTAMP WITH TIME ZONE);

DROP TABLE IF EXISTS users;

CREATE TABLE users( username VARCHAR(32), passhash VARCHAR(32), information jsonb);

DROP TABLE IF EXISTS workspace;

CREATE TABLE workspace ( workspaceName VARCHAR(32));

DROP TABLE IF EXISTS channel;

CREATE TABLE channel (curWorkspace VARCHAR(32), channelName VARCHAR(32));

DROP TABLE IF EXISTS messages;

CREATE TABLE messages ( curWorkspace VARCHAR(32), curChannel VARCHAR(32), curuser VARCHAR(32), sentTime VARCHAR(32), replies SMALLINT, messagebody TEXT, ID UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid());

DROP TABLE IF EXISTS dms;

CREATE TABLE dms (curWorkspace VARCHAR(32), userOne VARCHAR(32), userTwo VARCHAR(32), sentMessages jsonb);

DROP TABLE IF EXISTS replies;

CREATE TABLE replies (idx TEXT, sentMessages jsonb);