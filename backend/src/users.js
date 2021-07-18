const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

const findUser = async (user, pass) => {
    const select = `SELECT * FROM users WHERE username = '${user}'`;
    const query = {
        text: select,
        values: [],
    }
    const {found} = await pool.query(query)
    console.log(found);
    if (found) {return found;}
    else {return undefined;}
};;

exports.login = async (req, res) => {
    const usernameQuery = req.query.username;
    const passwordQuery = req.query.password;
    console.log(usernameQuery, passwordQuery)
    const person = await findUser(usernameQuery, passwordQuery);
    if (person) {res.status(200).send();}
    else {res.status(404).send();}
}
