const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
const path = require("path");
app.use(cors());

const users = [
  {
    name: "Bilal Akmal",
    id: "CSC-22S-032",
    address: "Dubai",
  },
  {
    name: "Ghulam Ali",
    id: "CSC-22S-023",
    address: "Usa",
  },
  {
    name: "Akmal Hussain",
    id: "CSC-22S-023",
    address: "Canada",
  },
  {
    name: "Umer Kaleem",
    id: "CSC-22S-043",
    address: "China",
  },
];

app.get("/", (req, res) => {
  console.log("Main req sent !");
  res.send("Wassup brother this is like an Api stuff !");
});

app.get("/users", (req, res) => {
  console.log("User req sent !");
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
