const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hi !!");
});

router.post("/items", (req, res) => {
  res.send("Post req !");
});

router.put("/items/:id", (req, res) => {
  res.send("This is put request !");
});

router.delete("/items/:id", (req, res) => {
  res.send("Delete Req !");
});

module.exports = router;
