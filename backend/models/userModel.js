const mongoose = require('mongoose') //bringing in mongoose and asigning it to variable mongoose

const userSchema = mongoose.Schema({  //putting our mongoose Schema and the fields we want it to have along with keys into the userSchema variable
    name: {
        type: String,                          // saying the data type of the name field is going to be a string
        required: [true, 'Please add a name']  //making sure adding a string to name field is required
    },
    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: true                                   //making sure the email field is unique and not one that is already registered to the database
    },
    password: {
        type: String,
        required: [true, 'please add an password'],        
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)  //model name is User, and the schema is userSchma created above