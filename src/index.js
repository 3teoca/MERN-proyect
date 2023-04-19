const express = require ("express")
const path = require ("path")
const app = express()

app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); 
app.use(express.static(path.join(__dirname, '../public')));

/* Funcionamiento EJS */
app.set("view engine","ejs")
app.set ("views",path.resolve(__dirname,"views"))

const taskRouter = require ("./routes/taskRoutes")
const movieRouter = require ("./routes/movieRoutes")
app.use ("/", taskRouter)
app.use ("/tasks", taskRouter)
app.use ("/movie", movieRouter)

const port = process.env.port || 3003;
app.listen(port,()=> (
    console.log("Servidor escuchando en el puerto http://localhost:" + port)
));