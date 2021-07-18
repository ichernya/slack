-- Dummy Data --
INSERT INTO dummy (created) VALUES (current_timestamp);

-- Populate Your Tables Here --
DELETE FROM users;
INSERT INTO users (username, passhash, information) VALUES ('user1', '1234', '{"firstName":"Alex","lastName":"Jacobs","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users (username, passhash, information) VALUES ('kan54', 'kx5WX32', '{"firstName":"Bob","lastName":"Mathers","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users (username, passhash, information) VALUES ('billy79', 'bi7979', '{"firstName":"Ana","lastName":"Garcia","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users (username, passhash, information) VALUES ('xor134', '431rox', '{"firstName":"Mona","lastName":"Lisa","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users (username, passhash, information) VALUES ('usainboltfan', 'fa12st', '{"firstName":"Richard","lastName":"Piana","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users (username, passhash, information) VALUES ('enterlocks', 'k45314yv1345', '{"firstName":"Madison","lastName":"Vodar","status":"online","workspace":"CSE183 Summer 2021"}');

DELETE FROM workspace;
INSERT INTO workspace (workspaceName) VALUES ('CSE183 SUMMER 2021');
INSERT INTO workspace (workspaceName) VALUES ('Google');
INSERT INTO workspace (workspaceName) VALUES ('Apple');
INSERT INTO workspace (workspaceName) VALUES ('Bing');


DELETE FROM channel;
INSERT INTO channel (curWorkspace, channelName) VALUES ('CSE183 SUMMER 2021', 'ASSIGNMENT 1');
INSERT INTO channel (curWorkspace, channelName) VALUES ('CSE183 SUMMER 2021', 'ASSIGNMENT 2');
INSERT INTO channel (curWorkspace, channelName) VALUES ('CSE183 SUMMER 2021', 'ASSIGNMENT 3');
INSERT INTO channel (curWorkspace, channelName) VALUES ('CSE183 SUMMER 2021', 'ASSIGNMENT 4');
INSERT INTO channel (curWorkspace, channelName) VALUES ('CSE183 SUMMER 2021', 'ASSIGNMENT 5');


DELETE FROM messages;
INSERT INTO messages ('Assignment 1', 'kan54' '6:32PM', 0, "Hello everyone! Nice to meet you");
INSERT INTO messages ('Assignment 1', 'kan54' '6:32PM', 0, "Hello anyone here?");
