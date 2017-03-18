defmodule Todos.Todo do
  use Todos.Web, :model

  schema "todos" do
    field :name, :string
    field :completed, :boolean

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name])
    |> validate_required([:name])
  end
end
