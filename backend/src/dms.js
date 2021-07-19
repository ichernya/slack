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

const allMessages = async (user, workspace, userTwo) => {
    const select = 'SELECT * FROM dms WHERE ((userOne = $1) AND (userTwo = $3)) OR ((userOne = $3) AND (userTwo = $1)) AND (curWorkspace = $2)'
    const query = {
        text: select,
        values: [ user, workspace, userTwo ]
    }
    const ret = [];
    const {rows} = await pool.query(query);
    for (const row of rows) {
        console.log(row);
        ret.push(row);
    }
    return ret;

}

const postDm = async (userone, workspace, usertwo) => {
    const message = {};
    const insert = 'INSERT INTO dms (userOne, curWorkspace, userTwo, sentMessages) VALUES ($1, $2, $3, $4)'
    const query = {
        text: insert,
        values: [ userone, workspace, usertwo, message],
    }
    await pool.query(query);
}
exports.getAll = async (req, res) => {
    const names = await allNames(req.query.user, req.query.workspace);
    res.status(200).json(names);

}

exports.getMessages = async (req, res) => {
    console.log(req.query.user);
    console.log(req.query.workspace);
    console.log(req.query.userSecond);
    const messages = await allMessages(req.query.user, req.query.workspace, req.query.userSecond)
    if (messages) {res.status(200).json(messages);}
    res.status(404).send();
}

exports.newMessage = async (req, res) => {
    console.log(req.body);
}

exports.addDm = async (req, res) => {
    console.log(req.body);
    await postDm(req.body.userone, req.body.workspace, req.body.usertwo);
    res.status(200).send();
}