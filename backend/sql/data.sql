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
INSERT INTO workspace(workspaceName) VALUES ('CSE13');

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

INSERT INTO channel(curWorkspace, channelName) VALUES ('CSE13', 'Project 1');
INSERT INTO channel(curWorkspace, channelName) VALUES ('CSE13', 'Project 2');
INSERT INTO channel(curWorkspace, channelName) VALUES ('CSE13', 'Project 3');

DELETE FROM messages;
INSERT INTO messages(curWorkspace, curChannel, curuser, sentTime, replies, messagebody) VALUES ('CSE183 Summer 2021', 'Assignment 1', 'usainboltfan', '2021-07-20T05:20:30Z', 0, 'Hello Everyone!');
INSERT INTO messages(curWorkspace, curChannel, curuser, sentTime, replies, messagebody) VALUES ('CSE183 Summer 2021', 'Assignment 1', 'billy79', '2021-07-20T05:20:30Z', 0, 'Hey Dude!');
INSERT INTO messages(curWorkspace, curChannel, curuser, sentTime, replies, messagebody) VALUES ('CSE183 Summer 2021', 'Assignment 1', 'user1', '2021-07-20T05:20:30Z', 0, 'Has anyone started this assignment yet?');
INSERT INTO messages(curWorkspace, curChannel, curuser, sentTime, replies, messagebody) VALUES ('CSE183 Summer 2021', 'Assignment 1', 'billy79', '2021-07-20T05:20:30Z', 0, 'yes! its a nightmare, start early or youll regret it');

INSERT INTO messages(curWorkspace, curChannel, curuser, sentTime, replies, messagebody) VALUES ('CSE183 Summer 2021', 'Assignment 2', 'xor134', '2021-07-20T05:20:30Z', 0, 'Does he take late work?');
INSERT INTO messages(curWorkspace, curChannel, curuser, sentTime, replies, messagebody) VALUES ('CSE183 Summer 2021', 'Assignment 2', 'billy79', '2021-07-20T05:20:30Z', 0, 'Yes, with 20% taken off');

INSERT INTO messages(curWorkspace, curChannel, curuser, sentTime, replies, messagebody) VALUES ('CSE183 Summer 2021', 'Assignment 3', 'vadae', '2021-07-20T05:20:30Z', 0, 'Does anyone want to partner up for this one?');
INSERT INTO messages(curWorkspace, curChannel, curuser, sentTime, replies, messagebody) VALUES ('CSE183 Summer 2021', 'Assignment 3', 'fencesye', '2021-07-20T05:20:30Z', 0, 'Also looking for partners, have 5 years of experience');
INSERT INTO messages(curWorkspace, curChannel, curuser, sentTime, replies, messagebody) VALUES ('CSE183 Summer 2021', 'Assignment 2', 'admin', '2021-07-20T05:20:30Z', 0, 'Looking');
INSERT INTO messages(curWorkspace, curChannel, curuser, sentTime, replies, messagebody) VALUES ('CSE183 Summer 2021', 'Assignment 2', 'billy79', '2021-07-20T05:20:30Z', 0, 'Yes, with 20% taken off');

INSERT INTO messages(curWorkspace, curChannel, curuser, sentTime, replies, messagebody) VALUES ('CSE112', 'Lab 1', 'usainboltfan', '6:34PM', 0, 'Hello Everyone!');
INSERT INTO messages(curWorkspace, curChannel, curuser, sentTime, replies, messagebody) VALUES ('CSE112', 'Lab 1', 'billy79', '6:35PM', 0, 'Hey Dude!');
INSERT INTO messages(curWorkspace, curChannel, curuser, sentTime, replies, messagebody) VALUES ('CSE112', 'Lab 1', 'user1', '6:37PM', 0, 'Has anyone started this assignment yet?');
INSERT INTO messages(curWorkspace, curChannel, curuser, sentTime, replies, messagebody) VALUES ('CSE112', 'Lab 1', 'billy79', '6:43PM', 0, 'yes! its a nightmare, start early or youll regret it');

DELETE FROM  dms;
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'user1', 'admin', '{"sent":"user1", "recieved":"admin", "time":"2021-07-20T05:20:30Z", "message":"Hey! How are you doing?"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'admin', 'user1', '{"sent":"admin", "recieved":"user1", "time":"2021-07-20T05:30:30Z", "message":"Yo! I have been very busy, wbu?"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'user1', 'admin', '{"sent":"user1", "recieved":"admin", "time":"2021-07-20T05:44:30Z", "message":"Busy as well hows the kids?"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'admin', 'user1', '{"sent":"admin", "recieved":"user1", "time":"2021-07-20T05:55:30Z", "message":"Sick"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'user1', 'usainboltfan', '{"sent":"user1", "recieved":"usainboltfan", "time":"2021-07-20T07:21:30Z", "message":"Hey! Have you seen the new movie?"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'usainboltfan', 'user1', '{"sent":"usainboltfan", "recieved":"user1", "time":"2021-07-20T09:25:30Z", "message":"No I havent, lets go on the weekend?"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'user1', 'usainboltfan', '{"sent":"user1", "recieved":"usainboltfan", "time":"2021-07-20T10:29:30Z", "message":"Ok, Im free on saturday all day"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'usainboltfan', 'user1', '{"sent":"usainboltfan", "recieved":"user1", "time":"2021-07-20T10:41:30Z", "message":"Sick"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'user1', 'fencesye', '{"sent":"user1", "recieved":"fencesye", "time":"2021-07-20T05:25:30Z", "message":"AHHHHHHHHH"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'fencesye', 'user1', '{"sent":"fencesye", "recieved":"user1", "time":"2021-07-20T06:32:30Z", "message":"AHHHHHHHHHHHHHHH"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'user1', 'fencesye', '{"sent":"user1", "recieved":"fencesye", "time":"2021-07-20T07:21:30Z", "message":"AHHHHHHHHHHHHHHHHHHHHHHHHH"}');
INSERT INTO dms(curWorkspace, userOne, userTwo, sentMessages) VALUES ('CSE183 Summer 2021', 'fencesye', 'user1', '{"sent":"fencesye", "recieved":"user1", "time":"2021-07-20T10:23:30Z", "message":"AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"}');


DELETE FROM replies;
INSERT INTO replies(idx, sentMessages) VALUES ('119e34aa-8b14-4c97-9252-4f8d934352c2', '{"sent":"user1", "time":"4:30PM", "message":"No, im putting it off lol"}');
INSERT INTO replies(idx, sentMessages) VALUES ('119e34aa-8b14-4c97-9252-4f8d934352c2', '{"sent":"fencesye", "time":"4:30PM", "message":"Me too haha"}');