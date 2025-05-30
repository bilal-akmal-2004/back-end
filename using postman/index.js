const express = require("express");
const app = express();
const port = 4000;

// import imtem ke location
const item = require("./routes/item");
// loading the above item in the application
app.use("/item", item);

// import birds ke location
const bird = require("./routes/bird");
// loading the above birds in the application
app.use("/bird", bird);

app.listen(port, () => {
  console.log(`This is the port we are using for this ${port}`);
});
