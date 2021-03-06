import { useLocation, useNavigate } from 'react-router-dom'
import { deleteWorkout } from '../utilities/workout-service'
import { Typography, Stack, Button } from '@mui/material'

const WorkoutDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const workoutDetails = location.state


    const handleDelete = async () => {
        try {
            const res = await deleteWorkout(workoutDetails._id)
            if(res.status === 200) navigate('/workouts')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Stack sx={{
            alignItems: 'center',
            mt: 3,
            border: 1
        }}>
            <img src={workoutDetails.image} alt="" />
            <Typography>Date: {workoutDetails.date}</Typography>
            <Typography>Workout: {workoutDetails.workout}</Typography>
            <Typography>Duration: {workoutDetails.duration} minutes</Typography>
            <Typography>Sets: {workoutDetails.sets} </Typography>
            <Typography>Reps: {workoutDetails.reps} </Typography>
            <Typography>Calories Burned: {workoutDetails.calories} </Typography>
            <Typography>Average Heart Rate: {workoutDetails.avgHeartRate} bpm</Typography>
            <Button 
                onClick={() => navigate(`/workouts/${workoutDetails._id}/edit`, { state: workoutDetails })}
                sx={{
                    backgroundColor: '#fda7fe',
                    padding: '10px',
                    mt: 2
                }}
            >
                Edit
            </Button>
            <Button  
                onClick={handleDelete}
                sx={{
                    backgroundColor: '#fda7fe',
                    mt: 1
                }}
            >
                Delete
            </Button>
        </Stack>
    );
}

export default WorkoutDetails;