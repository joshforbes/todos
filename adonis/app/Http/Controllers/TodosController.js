'use strict'

const Todo = use('App/Model/Todo')

class TodosController {

  * index (request, response) {
    const todos = yield Todo.all()
    response.json(todos)
  }

  * show (request, response) {
    const todo = yield Todo.find(request.param('id'))
    response.json(todo)
  }

  * store (request, response) {
    const todo = yield Todo.create({
      name: request.input('name')
    })
    response.json(todo)
  }

  * update (request, response) {
    const todo = yield Todo.find(request.param('id'))
    yield todo.fill({
      name: request.input('name')
    })
    response.json(todo)
  }

  * toggle (request, response) {
    const todo = yield Todo.find(request.param('id'))
    todo.completed = !todo.completed
    yield todo.save()
    response.json(todo)
  }

}

module.exports = TodosController