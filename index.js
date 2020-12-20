const express = require("express");
const helmet = require("helmet");
const { PORT } = require("./constants");
const Cors = require("cors");
const server = express();

server.use(Cors());

server.use(helmet());

server.use(express.json());

server.listen(PORT, "0.0.0.0", () => {
  console.log(`server is running on port : ${PORT}`);
});
