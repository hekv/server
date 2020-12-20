exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user").insert([
        {
          first_name: "mehdi",
          last_name: "roshan",
          age: 24,
          email: "mehdi.amenein@gmail.com",
        },
      ]);
    });
};
