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
INSERT INTO users(username, passhash, information) VALUES ('Dunkin', 'Donuts19', '{"firstName":"Alex","lastName":"Bin","status":"away","workspace":"CSE183 Summer 2021"}');
INSERT INTO users(username, passhash, information) VALUES ('kant41', 'DewDew', '{"firstName":"Robert","lastName":"James","status":"away","workspace":"CSE183 Summer 2021"}');
INSERT INTO users(username, passhash, information) VALUES ('vadae', 'bi79dg1', '{"firstName":"Alexa","lastName":"Ramirez","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users(username, passhash, information) VALUES ('fencesye', '953rdox', '{"firstName":"Kanye","lastName":"West","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users(username, passhash, information) VALUES ('xXalberXx', 'fax1t', '{"firstName":"Catherine","lastName":"Piana","status":"online","workspace":"CSE183 Summer 2021"}');
INSERT INTO users(username, passhash, information) VALUES ('admin', 'javascript', '{"firstName":"Keaton","lastName":"Singer","status":"away","workspace":"CSE183 Summer 2021"}');

DELETE FROM workspace;
INSERT INTO workspace(workspaceName) VALUES ('CSE183 Summer 2021');
INSERT INTO workspace(workspaceName) VALUES ('CSE112');

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
INSERT INTO messages(curChannel, curuser, sentTime, replies, messagebody) VALUES ('Assignment 1', 'usainboltfan', '6:34PM', 0, 'Hello Everyone!');
INSERT INTO messages(curChannel, curuser, sentTime, replies, messagebody) VALUES ('Assignment 1', 'billy79', '6:35PM', 0, 'Hey Dude!');
INSERT INTO messages(curChannel, curuser, sentTime, replies, messagebody) VALUES ('Assignment 1', 'user1', '6:37PM', 0, 'Has anyone started this assignment yet?');
INSERT INTO messages(curChannel, curuser, sentTime, replies, messagebody) VALUES ('Assignment 1', 'billy79', '6:43PM', 0, 'yes! its a nightmare, start early or youll regret it');

INSERT INTO messages(curChannel, curuser, sentTime, replies, messagebody) VALUES ('Assignment 2', 'xor134', '2:34AM', 0, 'Does he take late work?');
INSERT INTO messages(curChannel, curuser, sentTime, replies, messagebody) VALUES ('Assignment 2', 'billy79', '2:53AM', 0, 'Yes, with 20% taken off');

INSERT INTO messages(curChannel, curuser, sentTime, replies, messagebody) VALUES ('Lab 1', 'usainboltfan', '6:34PM', 0, 'Hello Everyone!');
INSERT INTO messages(curChannel, curuser, sentTime, replies, messagebody) VALUES ('Lab 1', 'billy79', '6:35PM', 0, 'Hey Dude!');
INSERT INTO messages(curChannel, curuser, sentTime, replies, messagebody) VALUES ('Lab 1', 'user1', '6:37PM', 0, 'Has anyone started this assignment yet?');
INSERT INTO messages(curChannel, curuser, sentTime, replies, messagebody) VALUES ('Lab 1', 'billy79', '6:43PM', 0, 'yes! its a nightmare, start early or youll regret it');

DELETE FROM  dms;
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'user1', 'admin', '{"sent":"user1", "recieved":"admin", "time":"4:30PM", "message":"Hey! How are you doing?"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'admin', 'user1', '{"sent":"admin", "recieved":"user1", "time":"4:31PM", "message":"Yo! I have been very busy, wbu?"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'user1', 'admin', '{"sent":"user1", "recieved":"admin", "time":"4:35PM", "message":"Busy as well hows the kids?"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'admin', 'user1', '{"sent":"admin", "recieved":"user1", "time":"4:40PM", "message":"Sick"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'user1', 'usainboltfan', '{"sent":"user1", "recieved":"usainboltfan", "time":"6:30PM", "message":"Hey! Have you seen the new movie?"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'usainboltfan', 'user1', '{"sent":"usainboltfan", "recieved":"user1", "time":"6:31PM", "message":"No I havent, lets go on the weekend?"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'user1', 'usainboltfan', '{"sent":"user1", "recieved":"usainboltfan", "time":"7:35PM", "message":"Ok, Im free on saturday all day"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'usainboltfan', 'user1', '{"sent":"usainboltfan", "recieved":"user1", "time":"4:40PM", "message":"Sick"}');