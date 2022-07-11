// Imports
import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

// Pages
import Home from '../Home/Home';
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp';
import CreateWorkout from '../CreateWorkout/CreateWorkout';
import Workouts from '../Workouts/Workouts';
import LandingPage from '../LandingPage/LandingPage';

// Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ExerciseDetail from '../ExerciseDetail/ExerciseDetail';
import WorkoutDetails from '../../components/WorkoutDetails';
import UpdateWorkoutForm from '../../components/UpdateWorkoutForm';

// Services
import * as usersService from '../../utilities/users-service'


const App = () => {

  const [user, setUser] = useState('')

  useEffect(() => {
    if (usersService.getToken()) setUser(usersService.getUser())
  }, [])

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar user={user} setUser={setUser} logOut={usersService.logOut} />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/signup' element={<SignUp setUser={setUser} />} />
        {
          user &&
          <>
          <Route path="/home" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path='/workouts' element={<Workouts />} />
          <Route path='/workouts/create' element={<CreateWorkout />} />
          <Route path='/workouts/:id' element={<WorkoutDetails />} />
          <Route path='/workouts/:id/edit' element={<UpdateWorkoutForm />} />
          </>
        }

      </Routes>
      <Footer />
    </Box>
  )
}

export default App;
