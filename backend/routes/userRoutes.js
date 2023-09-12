const express = require('express')
const router = express.Router()
const { 
    registerUser,
    loginUser,
    getMe,
} = require('../controllers/userController.js')  

router.post('/', registerUser)  //post is to add so here we are adding a user (POST, create, etc) // the registerUser variable being used is above and holds the userController files function for that route action
router.post('/login', loginUser)
router.get('/me', getMe)

module.exports = router