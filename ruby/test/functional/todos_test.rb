require 'test_helper'

class TodosTest < ActionDispatch::IntegrationTest
  test 'gets an index of todos' do
    todo = create(:todo)

    get '/todos'

    assert_response :success
    assert_includes(@response.body, todo.to_json)
  end

  test 'can show an individual todo' do
    todo = create(:todo)

    get "/todos/#{todo.id}"

    assert_response :success
    assert_includes(@response.body, todo.to_json)
  end

  test 'a new todo can be create' do
    post('/todos', params: {name: 'Test'})

    assert_response :success
    assert_not_empty Todo.where({name: 'Test'})
  end

  test 'a todo can be updated' do
    todo = create(:todo)

    patch("/todos/#{todo.id}", params: {name: 'Testing'})

    assert_response :success
    assert_equal('Testing', todo.reload.name)
  end

  test 'a todo can be delete' do
    todo = create(:todo)

    delete "/todos/#{todo.id}"

    assert_response :success
    assert_empty Todo.where({'id': todo.id})
  end
end
