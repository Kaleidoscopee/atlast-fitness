const express = require('express')  //this imports express to make a server
const dotenv = require('dotenv').config() //imports .env
const port = 3000 //variable holding the port number to listen for

const app = express() //makes the instance of the express server that was imported on line 1

app.get('/', (req, res) => {  //working test router(returns the welcome string)
    res.send('welcome to home page')  
})

app.listen(port, () => console.log       
(`listening to server on port ${port}`)) //tells the app to 'listen' to port which is the variable assigned 3000, then the string tells you what port it's listening for as well by using jsx injection for port