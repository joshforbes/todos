"use strict";

const router = require("koa-router")();
const Todo = require("../models/todo");

router.get("/", async ctx => {
  ctx.body = await Todo.fetchAll();
});

router.get("/:id", async ctx => {
  ctx.body = await Todo.where({ id: ctx.params.id }).fetch();
});

router.post("/", async ctx => {
  const todo = await new Todo({ name: ctx.request.body.name }).save();
  ctx.status = 201;
  ctx.body = todo;
});

router.patch("/:id", async ctx => {
  const todo = await new Todo({
    id: ctx.params.id,
    name: ctx.request.body.name
  }).save();
  ctx.status = 200;
  ctx.body = todo;
});

router.patch("/:id/toggle", async ctx => {
  const todo = await Todo.where({ id: ctx.params.id }).fetch();
  todo.set({ completed: !todo.completed }).save();
  ctx.status = 200;
  ctx.body = todo;
});

router.delete("/:id", async ctx => {
  await new Todo({ id: ctx.params.id }).destroy();
  ctx.status = 200;
});

module.exports = router;
