const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {  // you only need the ('/') bc the route was already specified inn servers app.use //working test router(returns the welcome string)
    res.status(200).json({ message:'welcome to home page'})  //changed to json to allow jsx injection of key value pair
})

module.exports = router