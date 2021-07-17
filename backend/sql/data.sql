-- Dummy Data --
INSERT INTO dummy (created) VALUES (current_timestamp);

-- Populate Your Tables Here --
DELETE FROM users;
INSERT INTO users (user pass firstName lastName) VALUES ('user1', '1234', 'Alex', 'Jacobs');
INSERT INTO users (user pass firstName lastName) VALUES ('user2', '1235', 'Evan', 'Crow');