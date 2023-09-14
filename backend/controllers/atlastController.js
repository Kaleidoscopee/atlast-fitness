const asyncHandler = require('express-async-handler') //wrapping all your asyncs w/ the function in this file in this imported handler 

const Workout = require('../models/workoutModel') //importing the schema from the models folder and the file workoutModel.js
const User = require('../models/workoutModel')

// @desc    Get workouts
// @route   GET /atlastRB/
// @access  Private
const getWorkout = asyncHandler(async (req, res) => {
    const workoutFind = await Workout.find({ user: req.user.id }) //asynchronous so using await, also workouts is just a variable called to find the workouts within the Workout schema in the workoutModel folder

    res.status(200).json(workoutFind) //200 for okay status and telling it to turn the value of workouts into json
})

// @desc    Set workout
// @route   POST /atlastRB/
// @access  Private
const setWorkout = asyncHandler(async (req, res) => {  
    if(!req.body.text) {  //checking the body data in postman to see if NOT true of there being text show err response below (this is made usable using middleware in server.js)
        res.status(400)     //error status code
        throw new Error('Please add a text field') //to show error and print the string ('')
    } 

    const workoutCreate = await Workout.create({    //workoutCreate is asychronously looking into the Workout variable which is looking at the workoutModel schema in models and telling it to use the create function to post that creation
        text: req.body.text,                   //also telling it to request the body text that you want to enter
    })

    res.status(200).json(workoutCreate)  //typical status code to say it's okay and json method for your creation
})

// @desc    Update workout
// @route   PUT /atlastRB/:id
// @access  Private
const updateWorkout = asyncHandler(async (req, res) => {
    const workout = await Workout.findById(req.params.id)

    if(!workout){
        res.status(400)
        throw new Error('Workout not found')
    }

    const user = await User.findById(req.user.id)

    //Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    //Make sure the logged in user matches the goal user
    if(global.user.toSring() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.
        body, {
            new: true,
        })

    res.status(200).json(updatedWorkout)
})

// @desc    Delete workout
// @route   DELETE /atlastRB/:id
// @access  Private
const deleteWorkout = asyncHandler(async (req, res) => {
    const workout = await Workout.findById(req.params.id)

    if(!workout){
        res.status(400)
        throw new Error('Workout not found')         //same error logic taken from updateWorkout function
    }

    //Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    //Make sure the logged in user matches the goal user
    if(global.user.toSring() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await workout.deleteOne() //.remove is deprecated and had to use await goal.deleteOne() - https://stackoverflow.com/questions/53140118/node15893-deprecationwarning-collection-remove-is-deprecated-use-deleteone
    // await workout.findByIdAndRemove() //can also use Ms.Stitts solution and try .findByIdAndRemove from the fruits routes lesson or .findByIdAndDelete

    res.status(200).json({ id: req.params.id }) 
})


//exporting all functions put into variables above inside {} below
module.exports = {    
    getWorkout,
    setWorkout,
    updateWorkout,
    deleteWorkout,
}