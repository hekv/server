exports.up = function (knex) {
  return knex.schema.createTable("topic", (table) => {
    table.increments();
    table.string("title").notNullable();
    table
      .integer("author")
      .unsigned()
      .index()
      .references("id")
      .inTable("user")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    /*
      table
        .integer("author")
        .unsigned()
        .index()
        .references("id")
        .inTable("user")
        .onDelete("cascade");
    */
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("topic");
};
