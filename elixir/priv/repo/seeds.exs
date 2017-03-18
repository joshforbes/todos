# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Todos.Repo.insert!(%Todos.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Todos.Repo
alias Todos.Todo

Repo.insert! %Todo{
  name: "Take out the trash",
  completed: false
}

Repo.insert! %Todo{
  name: "Wash the dishes",
  completed: true
}
