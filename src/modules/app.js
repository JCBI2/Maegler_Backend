const express = require("express");
const cors = require("cors")
const morgan = require("morgan")
const multer = require("multer")
const path = require("path")

const routes = require("../routes/index.routes")
const { userStorage, userFields } = require("./storage") 

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(multer({storage: userStorage}).fields(userFields))
app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: false }))

require("./database");

app.use("/", routes)

app.set("PORT", 3000);

module.exports = app;
