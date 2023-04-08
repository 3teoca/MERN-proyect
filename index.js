const express = require ("express")
const app = express()

const router = require ("./routes/taskRoutes")
app.use ("/task", router)


const port = process.env.port || 3003;
app.listen(port,()=> (
    console.log("Servidor escuchando en el puerto http://localhost:" + port)
));