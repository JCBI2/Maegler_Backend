const { Router } = require("express")

const DriverRoutes = require("./drivers.routes")
const AdminRoutes = require("./admin.routes")
const CompanyRoutes = require("./company.routes")

const router = Router()

router.use("/drivers", DriverRoutes)
router.use("/admin", AdminRoutes)
router.use("/companies", CompanyRoutes)

module.exports = router
