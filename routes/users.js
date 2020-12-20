const { Router } = require("express");
const users = require("../controllers/users");
const router = Router();
const { auth } = require("../handlers/index");

router.post("/register", users.register);
router.post("/login", users.login);
router.get("/me", auth, users.me);
router.post("/logout", auth, users.logout);
router.put("/", auth, users.update);
router.get("/", users.all);
router.delete("/", auth, users.delete);

module.exports = router;
