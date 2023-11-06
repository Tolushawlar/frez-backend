const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { readdirSync } = require("fs");
const { db } = require("./db/db");
const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cors());

// routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

app.get("/", (req, res) => {
  res.send("Hello word");
});

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("Your are listening to port: ", PORT);
  });
};

server();
