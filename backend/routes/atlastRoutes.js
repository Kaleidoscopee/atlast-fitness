const express = require('express')
const router = express.Router()  //typical express setup
const { getWorkout,
        setWorkout,
        updateWorkout,
        deleteWorkout, 
} = require('../controllers/atlastController') //inside the const is the atlastGET function from atlastControllers //require - so basically importing atlastController file from controllers folder

//ROUTES (Starting with CRUD - Create Read Update Delete)
// // GET = R(Read) 
// router.get('/', (req, res) => {  // you only need the ('/') bc the route was already specified inn servers app.use //working test router(returns the welcome string)
//     res.status(200).json({ message:'See Workout'})  //changed to json to allow jsx injection of key value pair ({message: 'value"})
// })
// // POST = C(Create)
// router.post('/', (req, res) => {  
//     res.status(200).json({ message:'Create a Workout'})  
// })
// // PUT = U(Update)
// router.put('/:id', (req, res) => {  
//     res.status(200).json({ message:`Update ${req.params.id}` })  //request params is requesting the parameter of id put into router as :id to make it whatever value you change it to
// })
// // Delete = D(Delete)
// router.delete('/:id', (req, res) => {  
//     res.status(200).json({ message:`Delete ${req.params.id}` })  
// })

// // Making the Routes Dynamic and clean
// // GET = R(Read) 
// router.get('/', getWorkout) //replaced entire funtion from original route with atlastGET (functionality of the function is now in the controller file atlastContoller.js)
// // POST = C(Create)
// router.post('/', setWorkout)
// // PUT = U(Update)
// router.put('/:id', updateWorkout)
// // Delete = D(Delete)
// router.delete('/:id', deleteWorkout)

//making the routes even cleaner by chaining the shared routes from above ('/') && ('/:id')
//this is get and post routes in one line
router.route('/').get(getWorkout).post(setWorkout)
//this is update and delete routes on one line (don't forget the :id)
router.route('/:id').put(updateWorkout).delete(deleteWorkout)

module.exports = router