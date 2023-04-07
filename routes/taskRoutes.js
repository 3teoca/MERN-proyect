const express = require ("express")
const taskController = require ("./controllers/takController.js")

const router = express.Router()

router.get ("/task")
router.get ("/task/:id")
router.post ("/task")
router.put ("/task/:id")
router.delete ("/task::id")

module.export = router