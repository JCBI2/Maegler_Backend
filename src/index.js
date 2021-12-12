const express = require('express')
const app = require("./modules/app.js")
const categorysRouter = require('./routes/categorys.routes');
const clientRouter = require('./routes/client.routes');
const orderRouter = require('./routes/orders.routes');


app.use('/categorias', categorysRouter);
app.use('/clientes', clientRouter);
app.use('/ordenes', orderRouter);


app.listen(app.get("PORT"), () => {
  console.log(`Server ready on port ${app.get("PORT")}`)
})

