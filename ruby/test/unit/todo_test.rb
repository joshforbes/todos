require 'test_helper'

class TodoTest < ActiveSupport::TestCase
  test 'can toggle an incomplete todo to completed' do
    todo = create(:todo, completed: false)

    todo = todo.toggle

    assert_equal(true, todo.completed)
  end

  test 'can toggle a completed todo to incomplete' do
    todo = create(:todo, completed: true)

    todo = todo.toggle

    assert_equal(false, todo.completed)
  end

  # test "the truth" do
  #   assert true
  # end
end
