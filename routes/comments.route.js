const {Router} = require('express')
const authMiddleware = require("../middleware/auth.middleware");
const {commentsController} = require("../controllers/comments.controller") 

const router = Router()

router.delete('/comments/:id', commentsController.deleteComments)
router.post('/comments',  commentsController.addComments)
router.get('/comments', commentsController.getComments)


module.exports = router