'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/todos', 'TodosController.index')
Route.get('/todos/:id', 'TodosController.show')
Route.post('/todos', 'TodosController.store')
Route.patch('/todos/:id', 'TodosController.update')
Route.patch('/todos/:id/toggle', 'TodosController.toggle')