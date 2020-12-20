module.exports = (err, req, res, next) => {
  switch (err.code) {
    case "23505":
      res.status("500").json({ error: "Your Email or username already exist" });
      break;
    case "500":
      res.status("500").json({ error: "Somthing went wrong" });
      break;

    default:
      break;
  }
};
