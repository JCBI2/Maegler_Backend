// Librarires Imports
const { Router } = require("express")
// Custom imports
const DriverController = require("../controllers/DriverController.js")
const { uploadDriverPhoto } = require("../middlewares/register.middleware")
const { verifyToken } = require("../middlewares/auth.middleware")

const router = Router();

/** GET  */
// Obtener lista de repartidores
router.get("/", DriverController.getDrivers)
// Obtener información de un repartidor
router.get("/profile", verifyToken, DriverController.getDriver)
// Obtener lista de órdenes tomadas por un repartidor
router.get("/:id/orders",  )

/** POST  */
// Registrar un nuevo rpartidor
router.post("/register", uploadDriverPhoto, DriverController.registerDriver)
// Login del repartidor
router.post("/login", DriverController.loginDriver)

/** PUT  */
// Aprobar  repartidor
router.put("/:id/approve", DriverController.approveDriver)
// Actualizar contraseña
router.put("/changePassword", verifyToken, DriverController.changeDriverPassword)

module.exports = router