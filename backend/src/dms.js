const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

const allNames = async (user, workspace) => {
    const select = 'SELECT * FROM dms WHERE (curWorkspace = $1) AND (userOne = $2 OR userTwo = $2)'
    const query = {
        text: select,
        values: [ workspace, user ]
    }
    const ret = []
    const {rows} = await pool.query(query);
    for (const row of rows) {
        if (user == row.userone) {
            if (!(ret.includes(row.usertwo))) {
                ret.push(row.usertwo);
            }
        }
        else {
            if (!(ret.includes(row.userone))) {
                ret.push(row.userone);
            }
        }
    }
    return ret;
}

const Allmessages = async = (user, workspace, userTwo) => {
    const select = 'SELECT * FROMS dms WHERE (userone = $1 OR usertwo = $3) AND (workspace = $2)'
    const query = {
        text: select,
        values: [ user, workspace, userTwo ]
    }
    
}

exports.getAll = async (req, res) => {
    console.log(req.query.user);
    console.log(req.query.workspace);
    const names = await allNames(req.query.user, req.query.workspace);
    res.status(200).json(names);

}

exports.getMessages = async (req, res) => {
    console.log(req.query.user);
    console.log(req.query.workspace);
    console.log(req.query.userSecond);
}