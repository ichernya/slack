const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

const grabChan = async (workspace) => {
    console.log(workspace);
    const select = 'SELECT container FROM workspace WHERE workspace = $1'
    const query = {
        text: select,
        values: [ workspace ]
    }
    const {rows} = await pool.query(query);
    console.log(rows);
}

exports.getChannels = async (req, res) => {
    console.log(req.query.workspace);
    const channels = await grabChan(req.query.workspace);
}