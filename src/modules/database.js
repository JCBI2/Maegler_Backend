const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/Maegler", 
  {
    useNewUrlParser: true, useUnifiedTopology : true
  }
).then( (res) => {
  console.log("Conexion a Base de Datos exitosa")
}).catch( (err) => {
  console.error("Ha ocurrido un error\n" + err)
})

module.exports = connection;