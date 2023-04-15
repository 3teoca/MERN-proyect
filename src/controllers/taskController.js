const db = require ("../database/models")

const taskController = {
    seeTasks: (req,res) => {
        db.Task.findAll()
        .then (tasks => {
            res.render("tasks",{tasks})
        })
    },
    seeTask: (req,res) => {
        db.Task.findByPk(req.params.id)
        .then (task=>{
            res.send (task)
        })
        /* .then (function(){
            if (task.length==0){
                return res.status(404)
            }}
        ) */
        .catch((err)=>{
            res.send(err)
        })
    },
    createTask: (req,res) => {
        res.render ("createTask")
    },
    createdTask: (req,res) => {
        res.render ("createTask")
    },
    editTask: (req,res) => {
        res.render ("editTask")
    },
    editedTask: (req,res) => {
        res.send ("editTask")
    },
    deleteTask: (req,res) => {
        db.Task.destroy({
            where:{id:req.params.id}
        })
        .then(res.redirect("./task"))
        
    },
}


module.exports = taskController