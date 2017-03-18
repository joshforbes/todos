'use strict';

const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const todos = require('./routes/todos');

app.use(bodyParser());

router.use('/todos', todos.routes(), todos.allowedMethods());
app.use(router.routes());

app.listen(3000);