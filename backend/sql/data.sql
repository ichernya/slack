-- Dummy Data --
INSERT INTO dummy (created) VALUES (current_timestamp);

-- Populate Your Tables Here --
DELETE FROM users;
INSERT INTO users (username, password, information) VALUES ('user1', '1234', {'firstName':'Alex','lastName':'Jacobs','status':'online'});
-- INSERT INTO users (user, pass, information) VALUES ('user2', '1235', {'firstName':'Evan','lastName':'Crowe','status':'online'});
-- INSERT INTO users (user, pass, information) VALUES ('abjf', 'adR541', {'firstName':'Ed','lastName':'Gate','status':'offline'});