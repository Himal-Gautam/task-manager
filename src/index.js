import express from 'express'
import './db/mongoose.js'
import userRouter from './routers/user.js'
import taskRouter from './routers/task.js'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.get("/", (req, res) => {
    res.send("Welcome to Task Manager Server !!!")
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
