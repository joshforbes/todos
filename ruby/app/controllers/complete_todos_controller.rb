class CompleteTodosController < ApplicationController
  def update
    todo = Todo.find(params[:id])
    todo.toggle

    render json: todo, status: :ok
  end
end
