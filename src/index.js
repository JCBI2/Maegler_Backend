const express = require('express')
const app = require("./modules/app.js")
const categorysRouter = require('./routes/categorys.routes');


app.use('/categorias', categorysRouter);


app.listen(app.get("PORT"), () => {
  console.log(`Server ready on port ${app.get("PORT")}`)
})

