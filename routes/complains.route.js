const { Router } = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const { complainsController } = require("../controllers/complains.controller");

const router = Router();
//
router.delete("/complains/:id",authMiddleware, complainsController.deleteComplains);
router.post("/complains",authMiddleware,complainsController.addComplains);
router.get("/complains",authMiddleware, complainsController.getComplains);

module.exports = router;
