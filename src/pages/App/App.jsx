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
import FoodNutrition from '../FoodNutrition/FoodNutrition';
import FoodLog from '../FoodLog/FoodLog';
import CreateFood from '../CreateFood/CreateFood';

// Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ExerciseDetail from '../ExerciseDetail/ExerciseDetail';
import WorkoutDetails from '../../components/WorkoutDetails';
import UpdateWorkoutForm from '../../components/UpdateWorkoutForm';
import FoodDetails from '../../components/FoodDetails';
import UpdateFoodForm from '../../components/UpdateFoodForm';

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
          <Route path='/food' element={<FoodNutrition />} />
          <Route path='/foodlog' element={<FoodLog />} />
          <Route path='/foodlog/create' element={<CreateFood />} />
          <Route path='/foodlog/:id' element={<FoodDetails />} />
          <Route path='/foodlog/:id/edit' element={<UpdateFoodForm />} />
          </>
        }

      </Routes>
      <Footer />
    </Box>
  )
}

export default App;
