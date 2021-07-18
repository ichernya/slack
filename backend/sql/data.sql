-- Dummy Data --
INSERT INTO dummy (created) VALUES (current_timestamp);

-- Populate Your Tables Here --
DELETE FROM users;
INSERT INTO users (username, passhash, information) VALUES ('user1', '1234', '{"firstName":"Alex","lastName":"Jacobs","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users (username, passhash, information) VALUES ('kan54', 'kx5WX32', '{"firstName":"Bob","lastName":"Mathers","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users (username, passhash, information) VALUES ('billy79', 'bi7979', '{"firstName":"Ana","lastName":"Garcia","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users (username, passhash, information) VALUES ('xor134', '431rox', '{"firstName":"Mona","lastName":"Lisa","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users (username, passhash, information) VALUES ('usainboltfan', 'fa12st', '{"firstName":"Jacob","lastName":"eeks","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users (username, passhash, information) VALUES ('enterlocks', 'k45314yv1345', '{"firstName":"Madison","lastName":"Vod","status":"online","workspace":"CSE183 Summer 2021"}');

DELETE FROM workspace;
INSERT INTO workspace ('CSE183 SUMMER 2021');
INSERT INTO workspace ('Google');
INSERT INTO workspace ('Apple');
INSERT INTO workspace ('Bing');


DELETE FROM messages;
INSERT INTO messages ('CSE183 SUMMER 2021', 'kan54' '6:32PM', 0)