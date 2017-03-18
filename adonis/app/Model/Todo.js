'use strict'

const Lucid = use('Lucid')

class Todo extends Lucid {

  toJSON() {
    return {
      'id': this.id,
      'name': this.name,
      'completed': Boolean(this.completed)
    }
  }
}

module.exports = Todo
