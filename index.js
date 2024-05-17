import 'dotenv/config'
import express from 'express'
import cancionRouter from './routes/cancion.route.js'



const app = express()
const __dirname = import.meta.dirname

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended:true }))


// /canciones (get)
// /cancion (post,put,delete)
app.use('/', cancionRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor activo en puerto ${PORT}`))