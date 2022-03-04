const express = require('express')
const app = express()
const cors = require("cors")
app.use(cors())


app.get("/", (req, res)=>{
    res.send('<h1>FUNCIONA</h1>')
})


const paginaInexistente = (req, res) => {
    res.status(404).send({error: 'esta página no existe'})
}

app.use(paginaInexistente)

const PORT = 3001 | 



app.listen(PORT, () => {
    console.log("servidor en linea")
})
