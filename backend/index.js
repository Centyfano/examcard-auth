const express = require("express");
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "config", "config.env"),
});
const app = express();

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(express.static(path.join(__dirname, "public", "dist")));

// JSON body parser
app.use(express.json());

// Mount routes
const mounts = require("./routes");
mounts(app);

app.get("/", (req, res) => {
  res.render("index.html");
});

// Start server
const port = process.env.PORT;
app.listen(port, () => {
  console.log("App listening on port ", port);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
});
