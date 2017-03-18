'use strict';

const bookshelf = require('../bookshelf');

let Todo = bookshelf.Model.extend({
  tableName: 'todos'
});

module.exports = Todo;