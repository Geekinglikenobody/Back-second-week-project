const {Router} = require("express");
const { userController } = require("../controllers/users.controller");
const imageMiddleware = require("../middleware/img.middleware");
const authMiddleware = require("../middleware/auth.middleware");
const router = Router()

router.delete("/users/:id", userController.deleteUser)
router.get("/users", userController.getAllUsers)

router.post("/registUs",imageMiddleware.single("avatar"), userController.registerUser)
router.post("/login", userController.loginUser)

router.delete("/deleteUs", userController.deleteAll)

router.get("/user", authMiddleware, userController.getUserById)
module.exports = router
