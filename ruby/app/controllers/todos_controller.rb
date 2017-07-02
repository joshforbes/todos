class TodosController < ApplicationController
  def index
    todos = Todo.all

    render json: todos, status: :ok
  end

  def show
    todo = Todo.find(params[:id])

    render json: todo, status: :ok
  end

  def create
    todo = Todo.create!(person_params)

    render json: todo, status: :ok
  end

  def update
    todo = Todo.find(params[:id])
    todo.update!(person_params)

    render json: todo, status: :ok
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy

    head :no_content
  end

  private
    def person_params
      params.permit(:name)
    end
end
