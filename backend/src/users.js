const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

const findUser = async (user, pass) => {
    console.log(user, pass);
    const select = 'SELECT * FROM users WHERE username = $1 AND passhash = $2';
    const query = {
        text: select,
        values: [ user, pass ],
    }
    const person = await pool.query(query)
    console.log(person);
    if (person) {return person;}
    else {return undefined;}
};;

exports.login = async (req, res) => {
    //grab user from frontend instead
    const user = 'user1';
    const pass = '1234';
    const person = await findUser(user, pass);
    if (person) {res.status(200).send();}
    else {res.status(404).send();}
}