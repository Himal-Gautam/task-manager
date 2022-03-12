import express from 'express'
import './db/mongoose.js'
import userRouter from './routers/user.js'
import taskRouter from './routers/task.js'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// import Task from './models/task.js'
// import User from './models/user.js'
// const main = async () => {
//     // const task = await Task.findById('622d0183cc13cca04c5e0536')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user = await User.findById('622cfa1acf3f748b28672a58')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks);
// }

// main()