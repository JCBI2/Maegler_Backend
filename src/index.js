const express = require('express')
const app = require("./modules/app.js")

app.listen(app.get("PORT"), () => {
  console.log(`Server ready on port ${app.get("PORT")}`)
})

