const models = require("../../models");

const TodoController = {
  async index(req, res, next) {
    let todos = await models.Todo.findAll();

    res.json({ data: todos });
  },

  async show(req, res, next) {
    let todo = await models.Todo.find(req.params.id);

    res.json({ data: todo });
  },

  async store(req, res, next) {
    let todo = await models.Todo.create({
      name: req.body.name
    });

    res.json({ data: todo });
  },

  async update(req, res, next) {
    let todo = await models.Todo.update({ name: req.body.name }, {
      where: { id: req.params.id }
    });

    res.json({ data: todo });
  },

  async toggle(req, res, next) {
    let todo = await models.Todo.find(req.params.id);
    todo.completed = !todo.completed;
    todo.save();

    res.json({ data: todo });
  },

  async destroy(req, res, next) {
    await models.Todo.destroy({
      where: {
        id: req.params.id
      }
    });

    res.json({});
  }
};

module.exports = TodoController;
