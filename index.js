const express = require ("express")

const app = express()




const port = process.env.port || 3003;
app.listen(port,()=> (
    console.log("Servidor escuchando en el puerto http://localhost:" + port)
));