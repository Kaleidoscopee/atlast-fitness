const mongoose = require('mongoose')

const workoutSchema = mongoose.Schema({
    user: {                                     //added user to workoutModels to make sure each workout CRUD use is associated with that particular user
      type: mongoose.Schema.Types.ObjectID,
      required: true,
      ref: 'User',
    },
    workout: {
      type: String,
      required: [true, 'Add Workout'],
                                         
    },
    description: {
      type: String,
      required: [true, 'Add Workout Description'],        
    },
    sets: {
      type: Number,
      required: [true, '# of Sets:'],
      unique: true                                   //making sure the email field is unique and not one that is already registered to the database
    },
    reps: {
      type: Number,
      required: [true, '# of Reps:'],        
    },

    }, 
    {
      timestamps: true,  //so you can log a time when posts are created (POST) and when they were updated (PUT) 
    }
)

module.exports = mongoose.model('Workout', workoutSchema)