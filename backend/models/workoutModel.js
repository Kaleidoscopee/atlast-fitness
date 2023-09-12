const mongoose = require('mongoose')

const workoutSchema = mongoose.Schema({
    user: {                                     //added user to workoutModels to make sure each workout CRUD use is associated with that particular user
      type: mongoose.Schema.Types.ObjectID,
      required: true,
      ref: 'User',
    },
    text: {                                               //the text entered in creating a workout
          type: String,
          required: [true, 'Please add a text value'],
        },
    }, 
    {
      timestamps: true,  //so you can log a time when posts are created (POST) and when they were updated (PUT) 
    }
)

module.exports = mongoose.model('Workout', workoutSchema)