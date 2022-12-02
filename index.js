import connect from './db/connectDB.js'
import express from 'express'
import dotenv from 'dotenv'
import user from './models/studentModel.js'

connect()

dotenv.config('.env')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html')
})

app.post('/', (req, res) => {
    try{
        user.insertOne({
            student: req.body.student,
            id: req.body.id,
            module: req.body.module,
            score: req.body.score 
        })
    }
    catch(e){
        console.log(e)
    }
})

app.listen(port, () => {
    console.log('App running on http://localhost:'+port)
})