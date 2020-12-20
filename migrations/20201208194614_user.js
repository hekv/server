exports.up = (knex) => {
  return knex.schema.createTable("user", (table) => {
    table.increments();
    table.string("first_name");
    table.string("last_name");
    table.string("plan").notNullable();
    table.string("profile_image");
    table.string("username").unique().notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("topic").dropTable("user");
};
