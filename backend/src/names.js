const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

const findName = async (user) => {
  const select = 'SELECT * FROM users where username = $1';
  const query = {
    text: select,
    values: [ user ],
  };
  const {rows} = await pool.query(query);
  if (rows.length == 0) { return undefined; }
  return rows[0].information;
};

exports.getName = async (req, res) => {
    const person = await findName(req.query.user);
    if (person) {res.status(200).send(person); }
    res.status(404).send();

};
