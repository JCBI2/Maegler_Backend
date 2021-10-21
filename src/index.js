const express = require("express");

const app = express()

app.set("PORT", 3000);

app.listen(app.get("PORT"), () => {
  console.log(`Server ready on port ${app.get("PORT")}`)
})