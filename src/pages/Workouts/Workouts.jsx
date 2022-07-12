import { useState, useEffect } from 'react'
import { getWorkout } from '../../utilities/workout-service'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography, Button } from '@mui/material'


const Workouts = () => {
    const [workouts, setWorkouts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const workoutsRes = await getWorkout()
            setWorkouts(workoutsRes.data)
        })()
    }, [])

    return (
        <Stack id='workout-wrapper'>
            <Button
                variant="contained"
                color="error"
                href="/workouts/create"
                sx={{
                    backgroundColor: '#fda7fe',
                    padding: '10px',
                    mt: 5
                }}
            >Add Workouts</Button>

            <Stack id='workout-container'>
                {
                    workouts.map(workout =>
                        <Stack
                            className="card"
                            id='workout-card'
                            key={workouts._id}
                            onClick={() => navigate(`/workouts/${workout._id}`, { state: workout })}
                            flexWrap="wrap"
                            direction="row"
                        >
                            <Stack sx={{
                                mt: 1,
                                maxWidth: '300px',
                                border: 1,
                                alignItems: 'center'
                            }}>
                                <Typography variant="h6" sx={{
                                    mr: 3,
                                    mt: 1
                                }}>Workout: {workout.workout}</Typography>
                                <Typography sx={{
                                    mr: 3,
                                    mt: 1
                                }}>Duration: {workout.duration} minutes</Typography>
                                <Typography sx={{
                                    mr: 3,
                                    mt: 1
                                }}>Calories burned: {workout.calories}</Typography>
                                <Typography sx={{
                                    mr: 3,
                                    mt: 1
                                }}>Average Heart Rate: {workout.avgHeartRate}</Typography>
                                <Typography sx={{
                                    mr: 3,
                                    mt: 1,
                                }}>Date: {workout.date}</Typography>
                                <Button
                                    onClick={() => navigate(`/workouts/${workout._id}/edit`, { state: workout })}
                                    sx={{
                                        backgroundColor: '#fda7fe',
                                        padding: '10px',
                                        mt: 2
                                    }}
                                >
                                    Edit
                                </Button>
                            </Stack>
                        </Stack>
                    )
                }

            </Stack>
        </Stack>
    )
}

export default Workouts;