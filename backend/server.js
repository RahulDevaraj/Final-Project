const express = require("express");
const app = express();
const port = 3000;

const apiRoutes = require("./routes/apiRoutes");
const connectdb = require("./config/db");
const Product = require("./models/ProductModel");

connectdb();

app.get("/", async (req, res, next) => {
  res.json({ message: "Hello World!" });
});
app.get("/a", (req, res, next) => {
  setTimeout(() => {
    try {
      aconsole.log("asynchronouse code");
    } catch (er) {
      next(er);
    }
  }, 1000);
  // next(new Error("some error occured"));
});

app.use((error, req, res, next) => {
  console.error(error);
  next(error);
});
app.use((error, req, res, next) => {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
});

app.use("/api", apiRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));