import { useEffect, useState } from "react"

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Atlas-t Fitness</h1>
            <p>Your personal workout planner</p>
        </div>
    )
    
    
    
    
    
    
    
    
    // const [workoutFind, setWorkout] = useState(null)

    // useEffect(() => {
    //     const fetchWorkouts = async () => {
    //         const response = await fetch('/atlast/RB')
    //         const json = await response.json()

    //         if (response.ok) {
    //             setWorkout(json)
    //         }
    //     }

    //     fetchWorkouts()
    // }, [])
    // return (
    //     <div className="home">
    //         <div className="workoutFind">
    //             {workoutFind && workoutFind.map((workout) => (
    //                 <p key={workout._id}>{workout.title}</p>
    //             ))}
    //         </div>
    //     </div>
    // )
}

export default Home