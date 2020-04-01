
exports.up = function(knex) {
    return knex.schema.createTable('teste', function (table){
        table.increments();
      });
};

exports.down = function(knex) {
  
};
