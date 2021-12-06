const { Router } = require("express")
const DriverRoutes = require("./drivers.routes")
const router = Router()

router.use("/drivers", DriverRoutes)

module.exports = router
