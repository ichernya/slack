const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

const addChannel = async (curWorkspace, channelName) => {
    const insert = 'INSERT INTO channel(curWorkspace, channelName) VALUES ($1, $2)'
    const query = {
        text: insert,
        values: [ curWorkspace, channelName ]
    }
    await pool.query(query);
}

exports.sendNew = async (req, res) => {
    await addMessage(req.body.curWorkspace, req.body.channelName);
    res.status(201).send(req.body);
}