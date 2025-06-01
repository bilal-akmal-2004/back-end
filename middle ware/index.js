const express = require("express");
const app = express();
const port = 4000;
const user = require("./routes/user");
// this is built in middleware hai !
app.use(express.json());

// now this where we are using the user route
app.use("/api", user);

app.get("/", (req, res) => {
  console.log("Body :", req.body);
  res.send("Assalam o alikum");
});

app.listen(port, () => {
  console.log("This port is runng on the: ", port);
});
