const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hi birds !!");
});

router.post("/birds", (req, res) => {
  res.send("Post req: birds !");
});

module.exports = router;
