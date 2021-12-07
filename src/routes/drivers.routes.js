// Librarires Imports
const { Router } = require("express")
// Custom imports
const DriverController = require("../controllers/DriverController.js")

const router = Router();

/** GET  */
// Obtener lista de repartidores
router.get("/", DriverController.getDrivers)
// Obtener información de un repartidor
router.get("/:id", DriverController.getDriver)
// Obtener lista de órdenes tomadas por un repartidor
router.get("/:d/orders", )

/** POST  */
// Registrar un nuevo rpartidor
router.post("/register", DriverController.registerDriver)
// Login del repartidor
router.post("/login", DriverController.loginDriver)

/** PUT  */
// Aprobar  repartidor
router.put("/:id/approve", DriverController.approveDriver)

module.exports = router