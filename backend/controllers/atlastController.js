// @desc    Get workouts
// @route   GET /atlastRB/
// @access  Private
const getWorkout = (req, res) => {
    res.status(200).json({ message: 'See Workouts' }) 
}

// @desc    Set workout
// @route   POST /atlastRB/
// @access  Private
const setWorkout = (req, res) => {
    res.status(200).json({ message:'Create a Workout'}) 
}

// @desc    Update workout
// @route   PUT /atlastRB/:id
// @access  Private
const updateWorkout = (req, res) => {
    res.status(200).json({ message:`Update ${req.params.id}` })
}

// @desc    Delete workout
// @route   DELETE /atlastRB/:id
// @access  Private
const deleteWorkout = (req, res) => {
    res.status(200).json({ message:`Delete ${req.params.id}` }) 
}


//exporting atlastGET above
module.exports = {    
    getWorkout,
    setWorkout,
    updateWorkout,
    deleteWorkout,
}