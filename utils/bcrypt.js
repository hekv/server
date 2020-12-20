const bcrypt = require("bcrypt");
exports.generate = async (pass) => {
  return await bcrypt.hash(pass, 10);
};
exports.match = async (dbpass, pass) => {
  return await bcrypt.compare(pass, dbpass);
};
