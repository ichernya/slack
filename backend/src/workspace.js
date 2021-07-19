const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

const grabAll = async () => {
    const select = 'SELECT * FROM workspace'
    const query = {
        text: select,
        values: [  ]
    }
    const {rows} = await pool.query(query);
    console.log(rows.workspaceName);
}

exports.getAllWork = async (req, res) => {
    const channels = await grabAll();
}