defmodule Todos.Router do
  use Todos.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Todos do
    pipe_through :api # Use the default browser stack

    resources "/todos", TodoController, except: [:new, :edit]
    post "/todos/:id/complete", TodoController, :complete
    post "/todos/:id/incomplete", TodoController, :incomplete
  end

  # Other scopes may use custom stacks.
  # scope "/api", Todos do
  #   pipe_through :api
  # end
end
