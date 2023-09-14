import React from 'react'

const Workout = ({ workout, onEdit, onDelete }) => {
    return (
        <div>
            <p>{workout.workout}</p>
            <p>{workout.description}</p>
            <p>{workout.Sets}</p>
            <p>{workout.Reps}</p>
            <button onClick={() => onEdit(workout)}>Edit</button>
            <button onClick={() => onDelete(workout._id)}>Delete</button>
        </div>
    )
}

export default Workout;