require 'test_helper'

class CompleteTodosTest < ActionDispatch::IntegrationTest
  test 'a todo can be completed' do
    todo = create(:todo, completed: false)

    patch("/complete-todos/#{todo.id}")

    assert_response :success
    assert_equal(true, todo.reload.completed)
  end
end
