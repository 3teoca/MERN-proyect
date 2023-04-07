const taskController = {
    seeTasks: (req,res) => {
        res.send ("Tareas")
    },
    seeTask: (req,res) => {
        res.send ("Tarea")
    },
    createTask: (req,res) => {
        res.send ("Crear Tarea")
    },
    editTask: (req,res) => {
        res.send ("Editar Tarea")
    },
    deleteTask: (req,res) => {
        res.send ("Eliminar Tareas")
    },
}

module.exports = taskController