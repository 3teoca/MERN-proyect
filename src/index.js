const express = require ("express")
const app = express()

app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); 


const taskRouter = require ("./routes/taskRoutes")
const movieRouter = require ("./routes/movieRoutes")
app.use ("/task", taskRouter)
app.use ("/movie", movieRouter)

const port = process.env.port || 3003;
app.listen(port,()=> (
    console.log("Servidor escuchando en el puerto http://localhost:" + port)
));