import { useState } from 'react'
import * as workoutService from '../../utilities/workout-service'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack, Button } from '@mui/material';



const CreateWorkout = () => {
  // If you don't specifically define object properties in your state, if you set your state anywhere in your code, it will automatically create the state object property for you.
  const [workoutDetails, setWorkoutDetails] = useState({
    workout: '',
    duration: 0,
    sets: 0,
    reps: 0,
    calories: 0,
    avgHeartRate: 0,
    date: ''
  })

  const navigate = useNavigate()

  const handleChange = e => {
    setWorkoutDetails({
      ...workoutDetails,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    workoutService.createWorkout(workoutDetails)
    navigate('/workouts')
  }

  // console.log(workoutDetails)
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
      <Button onClick={handleSubmit}>Add workout</Button>
    </Box>
  );
}

export default CreateWorkout;