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

const allChannel = async () => {
    const select = 'SELECT * FROM channel'
    const query = {
        text: select,
        values: [  ]
    }
    ret = [];
    const {rows} = await pool.query(query);
    console.log(rows);
    return rows;
}

exports.sendNew = async (req, res) => {
    await addMessage(req.body.curWorkspace, req.body.channelName);
    res.status(201).send(req.body);
}

exports.getAll = async (req, res) => {
    const channels = await allChannel();
    res.status(200).json(channels);
}