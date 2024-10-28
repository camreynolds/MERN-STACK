const express = require('express')
const router = express.Router()
const Workout = require('../models/workoutModel')

router.get('/',(req,res)=>{
    res.json({mssg:'Get all workouts.'})
})

router.get('/:id',(req,res)=>{
    res.json({mssg: 'Get a single workout.'})
})

router.post('/',async(req,res)=>{
    const {title,reps,load} = req.body
    try{
        const workout = await Workout.create({title,reps,load})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

router.delete('/:id',(req,res)=>{
    res.json({mssg:'Delete a single workout.'})
})

router.patch('/:id',(req,res)=>{
    res.json({mssg:'Update a single workout.'})
})

module.exports = router