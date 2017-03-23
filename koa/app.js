"use strict";

const Koa = require("koa");
const app = new Koa();
const router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const todos = require("./routes/todos");

const api = router().use("/todos", todos.routes());

app.use(bodyParser()).use(api.routes()).use(api.allowedMethods());

app.listen(3000);
