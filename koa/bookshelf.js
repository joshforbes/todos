'use strict';

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: 'db.sqlite3'
  }
});

module.exports = require('bookshelf')(knex);
