const app = require("./app")

app.listen(app.get("PORT"), () => {
  console.log(`Server ready on port ${app.get("PORT")}`)
})

