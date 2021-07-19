const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

const allNames = async = (user, workspace) => {
    const select = 'SELECT * FROM dms WHERE workspace = $1 AND user = $2'
    const query = {
        text: select,
        values: [ workspace, user ]
    }
    const {rows} = pool.query(query);
    console.log({rows});
}

const Allmessages = async = (user, workspace, userTwo) => {

}

exports.getAll = async (req, res) => {
    console.log(req.query.user);
    console.log(req.query.workspace);
    const names = await allNames(req.query.user, req.query.workspace);
    
}

exports.getMessages = async (req, res) => {
    console.log(req.query.user);
    console.log(req.query.workspace);
    console.log(req.query.userSecond);
}