const {Pool} = require('pg');
const { login } = require('./users');

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

const updateName = async (user, workspace) => {
    const update = 'UPDATE users SET information = $1'
    const query = {
        text: update,
        values: [ workspace]
    }
    await pool.query(query);
}
exports.getName = async (req, res) => {
    const person = await findName(req.query.user);
    if (person) {res.status(200).send(person); }
    res.status(404).send();

};

exports.updateUser = async (req, res) => {
    const user = await findName(req.query.user);
    user.workspace = req.query.workspace;
    await updateName(req.query.user, user);
    res.status(200).send();
}