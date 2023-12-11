const {Router} = require("express")
const authMiddleware = require("../middleware/auth.middleware")
const { favoriteController } = require("../controllers/favorites.controller")

const router = Router()

router.get("/favorite", authMiddleware,favoriteController.getFavorite)
router.patch("/favorite/:propertyId", authMiddleware, favoriteController.addPropertyInFavorite)
router.patch("/favoriteUpdate/:id", authMiddleware, favoriteController.deleteProperty)
module.exports = router  