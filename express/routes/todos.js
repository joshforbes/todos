const models = require("../models");
const express = require("express");
const router = express.Router();

router.get("/", async function(req, res, next) {
  let todos = await models.Todo.findAll();

  res.json({ data: todos });
});

router.get("/:id", async function(req, res, next) {
  let todo = await models.Todo.find(req.params.id);

  res.json({ data: todo });
});

router.post("/", async function(req, res, next) {
  let todo = await models.Todo.create({
    name: req.body.name
  });

  res.json({ data: todo });
});

router.patch("/:id", async function(req, res, next) {
  let todo = await models.Todo.update({ name: req.body.name }, {
    where: { id: req.params.id }
  });

  res.json({ data: todo });
});

router.patch("/:id/toggle", async function(req, res, next) {
  let todo = await models.Todo.find(req.params.id);
  todo.completed = !todo.completed;
  todo.save();

  res.json({ data: todo });
});

router.delete("/:id", async function(req, res) {
  await models.Todo.destroy({
    where: {
      id: req.params.id
    }
  });

  res.json({});
});

module.exports = router;
