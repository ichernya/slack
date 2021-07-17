-- Dummy table --
DROP TABLE IF EXISTS dummy;
CREATE TABLE dummy(created TIMESTAMP WITH TIME ZONE);

-- Your database schema goes here --
DROP TABLE IF EXISTS users;
CREATE TABLE users(
    user VARCHAR(32),
    pass VARCHAR(32),
    firstName VARCHAR(32),
    lastName VARCHAR(32)
    );

DROP TABLE IF EXISTS channel;
CREATE TABLE channel(
    messages VARCHAR(256);
    );