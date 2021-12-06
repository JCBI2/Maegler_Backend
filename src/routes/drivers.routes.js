// Librarires Imports
const { Router } = require("express")
// Custom imports
const DriverController = require("../controllers/DriverController.js")

const router = Router();

router.get("/", DriverController.getDrivers)
router.get("/:id", DriverController.getDriver)
router.post("/new", DriverController.addNewDriver)


module.exports = router