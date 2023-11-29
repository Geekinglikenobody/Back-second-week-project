const { Router } = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const { commentsController } = require("../controllers/comments.controller");

const router = Router();
//
router.delete("/comments/:id", commentsController.deleteComments);
router.post("/comments", authMiddleware, commentsController.addComments);
router.get("/comments/:id", commentsController.getComments);

module.exports = router;
