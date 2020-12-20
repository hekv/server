const express = require("express");
const helmet = require("helmet");
const { PORT } = require("./constants");
const Cors = require("cors");
const server = express();
const routes = require("./routes");

server.use(Cors());

server.use(helmet());

server.use(express.json());

server.use("/", routes);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`server is running on port : ${PORT}`);
});
