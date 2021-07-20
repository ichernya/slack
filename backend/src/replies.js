const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});


const returnReplies = async (id) => {
    const select = 'SELECT * FROM replies WHERE idx = $1'
    const query = {
        text: select,
        values: [ id ]
    }
    const {rows} = await pool.query(query);
    console.log(rows);
    if (rows.length == 0) { return undefined; }
    return rows[0];
}

const createReply = async (id, sentMessages) => {
    const insert = 'INSERT INTO replies(idx, sentMessages) VALUES ($1, $2)'
    const query = {
        text: insert,
        values: [ id, sentMessages ]
    }
    await pool.query(query);
}

exports.getById = async (req, res) => {
    console.log(req.query.id);
    const replies = await returnReplies(req.query.id);
    if (replies) {res.status(200).send();}
    res.status(404);
}

exports.create = async (req, res) => {
   
    console.log(req.body.sentMessages);
    console.log(req.body);
    await createReply(req.body.id, req.body.sentMessages);
    res.status(201).send();

}