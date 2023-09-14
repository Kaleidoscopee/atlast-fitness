import React, {useEffect, useState } from "react";
import Workout from "./Workout";

const Workout = () => {
    const [workouts, setWorkouts] = useState([]);

}
    // getting workouts from backend 
    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('/atlast/RB');
                const data = await response.json();
                setWorkouts(data);
            } catch (error) {
                console.error('Error fetching workouts:', error)
            }
        }

        fetchWorkouts()
    }, [])

    // workout delete
const handleDelete = async (workoutId) => {
    try {
        await fetch(`/atlast/RB/${workoutId}`, {

        },
    });

