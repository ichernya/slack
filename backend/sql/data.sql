-- Dummy Data --
INSERT INTO dummy (created) VALUES (current_timestamp);

-- Populate Your Tables Here --
DELETE FROM users;
INSERT INTO users(username, passhash, information) VALUES ('user1', '1234', '{"firstName":"Alex","lastName":"Jacobs","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users(username, passhash, information) VALUES ('kan54', 'kx5WX32', '{"firstName":"Bob","lastName":"Mathers","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users(username, passhash, information) VALUES ('billy79', 'bi7979', '{"firstName":"Ana","lastName":"Garcia","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users(username, passhash, information) VALUES ('xor134', '431rox', '{"firstName":"Mona","lastName":"Lisa","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users(username, passhash, information) VALUES ('usainboltfan', 'fa12st', '{"firstName":"Richard","lastName":"Piana","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users(username, passhash, information) VALUES ('enterlocks', 'k45314yv1345', '{"firstName":"Madison","lastName":"Vodar","status":"online","workspace":"CSE183 Summer 2021"}');

-- DELETE FROM workspace;
-- INSERT INTO workspace(workspaceName) VALUES ('CSE183 SUMMER 2021', '{"ASSIGNMENT", "ASSIGNMENT 2", "ASSIGNMENT 3", "ASSIGNMENT 4", "ASSIGNMENT 5"}');
-- INSERT INTO workspace(workspaceName) VALUES ('Google', '{ASSIGNMENT 1, ASSIGNMENT 2, ASSIGNMENT 3, ASSIGNMENT 4, ASSIGNMENT 5}');
-- INSERT INTO workspace(workspaceName) VALUES ('Apple', '{ASSIGNMENT 1, ASSIGNMENT 2, ASSIGNMENT 3, ASSIGNMENT 4, ASSIGNMENT 5}');
-- INSERT INTO workspace(workspaceName) VALUES ('Bing', '{ASSIGNMENT 1, ASSIGNMENT 2, ASSIGNMENT 3, ASSIGNMENT 4, ASSIGNMENT 5}');


DELETE FROM channel;
INSERT INTO channel(curWorkspace, channelName) VALUES ('CSE183 Summer 2021', 'Assignment 1');
INSERT INTO channel(curWorkspace, channelName) VALUES ('CSE183 Summer 2021', 'Assignment 2');
INSERT INTO channel(curWorkspace, channelName) VALUES ('CSE183 Summer 2021', 'Assignment 3');
INSERT INTO channel(curWorkspace, channelName) VALUES ('CSE183 Summer 2021', 'Assignment 4');
INSERT INTO channel(curWorkspace, channelName) VALUES ('CSE183 Summer 2021', 'Assignment 5');

INSERT INTO channel(curWorkspace, channelName) VALUES ('CSE112', 'Lab 1');
INSERT INTO channel(curWorkspace, channelName) VALUES ('CSE112', 'Lab 2');
INSERT INTO channel(curWorkspace, channelName) VALUES ('CSE112', 'Lab 3');
INSERT INTO channel(curWorkspace, channelName) VALUES ('CSE112', 'Lab 4');
INSERT INTO channel(curWorkspace, channelName) VALUES ('CSE112', 'Lab 5');

DELETE FROM messages;
--  messages (curChannel VARCHAR(32), curuser VARCHAR(32), sentTime TIMESTAMP WITHOUT TIME ZONE, replies SMALLINT, messagebody VARCHAR(32));
INSERT INTO messages(curChannel, curuser, sentTime, replies, messagebody) VALUES ('Assignment 1', 'usainboltfan', '6:34PM', 0, 'Hello Everyone!');
INSERT INTO messages(curChannel, curuser, sentTime, replies, messagebody) VALUES ('Assignment 1', 'billy79', '6:35PM', 0, 'Hey Dude!');
INSERT INTO messages(curChannel, curuser, sentTime, replies, messagebody) VALUES ('Assignment 1', 'user1', '6:37PM', 0, 'Has anyone started this assignment yet?');
INSERT INTO messages(curChannel, curuser, sentTime, replies, messagebody) VALUES ('Assignment 1', 'billy79', '6:43PM', 0, 'yes! its a nightmare, start early or youll regret it');

INSERT INTO messages(curChannel, curuser, sentTime, replies, messagebody) VALUES ('Assignment 2', 'xor134', '2:34AM', 0, 'Does he take late work?');
INSERT INTO messages(curChannel, curuser, sentTime, replies, messagebody) VALUES ('Assignment 2', 'billy79', '2:53AM', 0, 'Yes, with 20% taken off');