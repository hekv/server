require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  KNEX: require("knex")(require("./knexfile")[process.env.ENV]),
  JWT_TOKEN: "fkedsfjoeisjföoiesfgnsejkfposkfkeopkfsopkefopieomiguniunse",
};
