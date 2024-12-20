require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose")
const app = express()
const workoutRoutes = require("./routes/workouts")
const usersRoutes = require("./routes/users")

app.use(express.json())
app.use((req,res,next) =>{
    console.log(req.path,req.method);
    next()    
})
app.use('/api/workouts',workoutRoutes)
app.use('/api/users',usersRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () =>{
            console.log('conneted to db & listening on port', process.env.PORT)            
        })
    })
    .catch(error=>{
        console.log(error) 
    })