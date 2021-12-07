const express = require("express");
const cors = require("cors")
const morgan = require("morgan")

const routes = require("../routes/index.routes")

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({
  extended: false
}))

require("./database");

app.use("/", routes)

app.set("PORT", 3000);

module.exports = app;
