const {Router} = require("express")
const authMiddleware = require("../middleware/auth.middleware")
const imageMiddleware = require("../middleware/img.middleware")
const { propertyController } = require("../controllers/properties.controller")
const router = Router()

router.post("/property", propertyController.createProperty)
router.get("/property", propertyController.getProperties)
module.exports = router