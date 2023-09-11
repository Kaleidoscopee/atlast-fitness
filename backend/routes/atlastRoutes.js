const express = require('express')
const router = express.Router()  //typical express setup
const { atlastGET } = require('../controllers/atlastController') //inside the const is the atlastGET function from atlastControllers //require - so basically importing atlastController file from controllers folder

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

// Making the Routes Dynamic and clean
// GET = R(Read) 
router.get('/', atlastGET) //replaced entire funtion from original route with atlastGET (functionality of the function is now in the controller file atlastContoller.js)
// POST = C(Create)
router.post('/', (req, res) => {  
    res.status(200).json({ message:'Create a Workout'})  
})
// PUT = U(Update)
router.put('/:id', (req, res) => {  
    res.status(200).json({ message:`Update ${req.params.id}` })  //request params is requesting the parameter of id put into router as :id to make it whatever value you change it to
})
// Delete = D(Delete)
router.delete('/:id', (req, res) => {  
    res.status(200).json({ message:`Delete ${req.params.id}` })  
})

module.exports = router