import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import * as workoutService from '../utilities/workout-service'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack, Button } from '@mui/material';

const UpdateWorkoutForm = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const workout = location.state

    const [workoutDetails, setWorkoutDetails] = useState(workout)

    // console.log(location.state)

    const handleChange = e => {
        setWorkoutDetails({
            ...workoutDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await workoutService.updateWorkout(workoutDetails)
            // console.log(res)
            if (res.status === 200) navigate(`/workouts/${workoutDetails._id}`, { state: workoutDetails })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          alignItems: 'center'
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Stack sx={{
          alignItems: 'center'
        }}>
          <TextField
            required
            id="outlined-password-input"
            label="Workout"
            name="workout"
            defaultValue=""
            onChange={handleChange}
            value={workoutDetails.workout}
            placeholder={workout.workout}
          />
          <TextField
            id="outlined-password-input"
            label="Duration (minutes)"
            name='duration'
            type="number"
            onChange={handleChange}
            value={workoutDetails.duration}
  
          />
          <TextField
            id="outlined-password-input"
            label="Sets"
            name='sets'
            type="number"
            onChange={handleChange}
            value={workoutDetails.sets}
  
          />
          <TextField
            id="outlined-password-input"
            label="Reps"
            name='reps'
            type="number"
            onChange={handleChange}
            value={workoutDetails.reps}
  
          />
          <TextField
            id="outlined-password-input"
            label="Calories"
            name='calories'
            type="number"
            onChange={handleChange}
            value={workoutDetails.calories}
  
          />
          <TextField
            id="outlined-password-input"
            label="Average Heart Rate"
            name='avgHeartRate'
            type="number"
            onChange={handleChange}
            value={workoutDetails.avgHeartRate}
  
          />
          <TextField
            id="date"
            label="date"
            name='date'
            type="date"
            onChange={handleChange}
            value={workoutDetails.date}
  
          />
        </Stack>
        <Button onClick={handleSubmit}>Edit workout</Button>
      </Box>
    )
}

export default UpdateWorkoutForm;