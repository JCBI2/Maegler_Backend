const { Router } = require("express")

const DriverRoutes = require("./drivers.routes")
const AdminRoutes = require("./admin.routes")

const router = Router()

router.use("/drivers", DriverRoutes)
router.use("/admin", AdminRoutes)

module.exports = router
