const express = require("express");
const router = express.Router();

// middle ware stuf here
const authMiddleWare = function (req, res, next) {
  console.log("Auth Middleware: This is where authentication happens !");
  req.user = { id: 1, role: "admin" };
  if (req.user) {
    // agar yahan pai user available hai tou bhai next middleware pai chla jeo
    next();
  } else {
    res.send({
      success: false,
      message: "The user is not logged in !",
    });
  }
};

const studentMiddleWare = function (req, res, next) {
  console.log(
    "Student middleware: This where student checks in and no one else !"
  );

  if (req.user.role === "student") {
    next();
  } else {
    res.send({
      success: false,
      message: "Only students are allowed here !",
    });
  }
};

const adminMiddleWare = function (req, res, next) {
  console.log("Admin middleware: This where admin checks in and no one else !");

  if (req.user.role === "admin") {
    next();
  } else {
    res.send({
      success: false,
      message: "Only admin are allowed here !",
    });
  }
};

// routes defined here
router.get("/student", authMiddleWare, studentMiddleWare, (req, res) => {
  console.log("I am inside student route.");
  res.send("Stundent specific route.");
});

router.get("/admin", authMiddleWare, adminMiddleWare, (req, res) => {
  console.log("I am inside admin route.");
  res.send("Admin specific route.");
});

module.exports = router;
