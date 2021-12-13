const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://JCBI:Qwerty@cluster0.oc2ob.mongodb.net/Maegler?retryWrites=true&w=majority", 
  {
    useNewUrlParser: true, useUnifiedTopology : true
  }
).then( (res) => {
  console.log("Conexion a Base de Datos exitosa")
}).catch( (err) => {
  console.error("Ha ocurrido un error\n" + err)
})

module.exports = connection;