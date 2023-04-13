const express = require ("express")
const router = express.Router();

const taskController = require ("../controllers/taskController.js")

router.get ("/", taskController.seeTasks)
router.get ("/:id", taskController.seeTask)
router.post ("/", taskController.createTask)
router.put ("/:id", taskController.editTask)
router.delete ("/:id", taskController.deleteTask)

module.exports = router