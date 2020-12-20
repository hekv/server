const { KNEX: knex } = require("../constants");
const { bcrypt } = require("../utils");
const { sign } = require("jsonwebtoken");
const accessTokenSecret = "youraccesstokensecret";

exports.logout = (req, res, next) => {
  res.json({ function: "loutout" });
};

exports.login = async (req, res, next) => {
  // Read username and password from request body
  const { username, password } = req.body;
  console.log(req.body);

  // Filter user from the users array by username and password
  const user = await knex.where({ username }).select().from("user");

  if (user) {
    if (await bcrypt.match(user[0].password, password)) {
      // Generate an access token
      const accessToken = sign({ username }, accessTokenSecret);

      res.json({
        accessToken,
      });
    }
  } else {
    res.send("Username or password incorrect");
  }
};

exports.me = (req, res, next) => {
  if (req.user) res.send({ user: req.user.username });
  else next({ error: { code: 403 } });
};

exports.all = async (req, res, next) => {
  var result = await knex.select("*").from("user");
  return res.json(result);
};

exports.register = async (req, res, next) => {
  try {
    let hash = await bcrypt.generate(req.body.password);
    let result = await knex("user")
      .insert({ ...req.body, plan: "starter", password: hash })
      .returning("*");
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    let hash = await bcrypt.generate(req.body.password);
    let result = await knex("user")
      .where({ username: req.user.username })
      .update({ ...req.body, password: hash })
      .returning("*");
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    let result = await knex("user")
      .where({ username: req.user.username })
      .delete()
      .returning("*");
    return res.json(result);
  } catch (error) {
    next(error);
  }
};
