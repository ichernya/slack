const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

const addMessage = async (username, message, time, replies, channel) => {
    const insert = 'INSERT INTO messages(curChannel, curuser, sentTime, replies, messageBody) VALUES ($1, $2, $3, $4, $5)'
    const query = {
        text: insert,
        values: [ channel, username, time, replies, message ]
    }
    await pool.query(query);
}

const getMessages = async (channel) => {
    const select = `SELECT * FROM messages WHERE curChannel = $1`;
    const query = {
        text: select,
        values: [ channel ],
    };
    const ret = [];
    const {rows} = await pool.query(query);
    console.log({rows});
    for (const row of rows) {
        console.log(row);
        ret.push(row);
    }
    return ret;
}

exports.sendNew = async (req, res) => {
    await addMessage(req.body.username, req.body.message, 
                          req.body.time, req.body.replies,
                          req.body.channel);
    res.status(201).send(req.body);
}

exports.getAll = async (req, res) => {
    console.log(req.query.channel);
    const messages = await getMessages(req.query.channel);
    if(messages) {res.status(200).send(messages);}
    else {res.status(404).send();}
}