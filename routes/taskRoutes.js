const express = require ("express")
const router = express.Router();

const taskController = require ("../controllers/taskController.js")

router.get ("/task", taskController.seeTasks)
router.get ("/task/:id", taskController.seeTask)
router.post ("/task", taskController.createTask)
router.put ("/task/:id", taskController.editTask)
router.delete ("/task/:id", taskController.deleteTask)

module.export = router