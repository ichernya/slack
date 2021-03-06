const express = require('express');
const cors = require('cors');
const yaml = require('js-yaml');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');
const OpenApiValidator = require('express-openapi-validator');

const dummy = require('./dummy');
const users = require('./users');
const messages = require('./messages');
const channel = require('./channel');
const workspace = require('./workspace');
const dms = require('./dms');
const names = require('./names')
const replies = require('./replies')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const apiSpec = path.join(__dirname, '../api/openapi.yaml');

const apidoc = yaml.load(fs.readFileSync(apiSpec, 'utf8'));
app.use('/v0/api-docs', swaggerUi.serve, swaggerUi.setup(apidoc));

app.use(
    OpenApiValidator.middleware({
      apiSpec: apiSpec,
      validateRequests: true,
      validateResponses: true,
    }),
);

app.get('/v0/dummy', dummy.get);
app.get('/v0/users', users.login);
app.post('/v0/channel', channel.sendNew);
app.post('/v0/messages', messages.sendNew);
app.get('/v0/channel', channel.getAll);
app.get('/v0/workspace', workspace.getAllWork);
app.get('/v0/messages', messages.getAll);
app.get('/v0/dms', dms.getAll);
app.get('/v0/dmMessages', dms.getMessages);
app.get('/v0/name', names.getName);
app.post('/v0/dmMessages', dms.newMessage);
app.post('/v0/dms', dms.addDm);
app.put('/v0/name', names.updateUser);
app.post('/v0/replies', replies.create);
app.get('/v0/replies', replies.getById);

app.use((err, req, res, next) => {
  res.status(err.status).json({
    message: err.message,
    errors: err.errors,
    status: err.status,
  });
});

module.exports = app;
