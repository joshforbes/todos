class Todo < ApplicationRecord
  validates :name, presence: true

  def toggle
    self.update(completed: self.completed = !self.completed)

    self
  end
end
