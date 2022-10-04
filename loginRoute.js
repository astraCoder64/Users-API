const express = require("express");
const router = express.Router();

const handleLogin = require("./login.js");

router.post("/", handleLogin);

module.exports = router;
