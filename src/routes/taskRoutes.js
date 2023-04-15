const express = require ("express")
const router = express.Router();

const taskController = require ("../controllers/taskController.js")

router.get ("/", taskController.seeTasks)
router.get ("/detail/:id", taskController.seeTask)

router.get ("/create", taskController.createTask)
router.post ("/create", taskController.createdTask)

router.get("/edit/:id", taskController.editTask)
router.post("/edit/:id", taskController.editedTask)

router.post ("/:id", taskController.deleteTask)



module.exports = router