const db = require ("../database/models")

const taskController = {
    seeTasks: (req,res) => {
        db.Task.findAll({raw:true})
        .then (tasks => {
    
            res.render("tasks",{tasks}) 
        })
        .catch((err)=>{
            res.send(err)
        })
    },
    seeTask: (req,res) => {
        db.Task.findByPk(req.params.id)
        .then (task=>{
            
            res.render("detail", {task:task.dataValues})
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
        db.Task.create({
            title: req.body.title,
            description:req.body.description,
            done: req.body.categoria,
        })
        .then (res.redirect ("/tasks"))
        .catch((err)=>{
            res.send(err)
        })
    },
    editTask: (req,res) => {
        db.Task.findByPk(req.params.id)
        .then (task=>{
            
            res.render("editTask", {task:task.dataValues})
        })
        
    },
    editedTask: (req,res) => {
        db.Task.update ({
            title: req.body.title,
            description:req.body.description,
            done: req.body.categoria,
        },{where:{id:req.params.id}})

        .then(res.redirect("/tasks"))

        .catch((err)=>{
            res.send(err)
        })
        
    },
    deleteTask: (req,res) => {
        db.Task.destroy({
            where:{id:req.params.id}
        })
        .then(res.redirect("/tasks"))
        .catch((err)=>{
            res.send(err)
        })
    }
}


module.exports = taskController