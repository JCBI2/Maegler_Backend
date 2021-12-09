const { Router } = require("express")
const AdminController = require("../controllers/AdminController")

const router = Router()

router.get("/login", AdminController.loginAdmin)


module.exports = router