const { Router } = require("express")
const AdminController = require("../controllers/AdminController")

const router = Router()

router.post("/login", AdminController.loginAdmin)


module.exports = router