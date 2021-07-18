const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});
//workspaceIn VARCHAR(32), curuser VARCHAR(32), sent TIMESTAMP WITHOUT TIME ZONE, replies SMALLINT
exports.addMessage = async (username, message, time, replies, channel) => {
    const insert = 'INSERT INTO messages(workspaceIn, curuser, sent, replies messageBody) VALUES ($1, $2, $3, $4, $5)'
    const query = {
        text: insert,
        values: [ channel, username, time, replies, message ]
    }
}
exports.sendNew = async (req, res) => {
    await pool.addMessage(req.body.username, req.body.message, 
                          req.body.time, req.body.replies,
                          req.body.channel);
    res.status(201).send(req.body);

}