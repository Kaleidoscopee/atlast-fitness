const express = require('express')  //this imports express to make a server
const dotenv = require('dotenv').config() //imports .env
const port = process.env.PORT || 3000 //variable holding the port number to listen for(now grabbing from env file OR 3000)

const app = express() //makes the instance of the express server that was imported on line 1

//  MIDDLEWARE


//Middleware forcing the routes to include /atlastRB first before the rest of the route
app.use('/atlastRB', require('./routes/atlastRoutes')) //makes the route atlastRB
                                                       //& require is like an import so it's looking in the routes folder and then that file (atlastRoutes)


//PORT 3000
app.listen(port, () => console.log       
(`listening to server on port ${port}`)) //tells the app to 'listen' to port which is the variable assigned 3000, then the string tells you what port it's listening for as well by using jsx injection for port