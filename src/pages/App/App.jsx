// Imports
import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

// Pages
import Home from '../Home/Home';
import Login from '../Login/Login'

// Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ExerciseDetail from '../ExerciseDetail/ExerciseDetail';

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
        <Route path='/login' element={<Login setUser={setUser} />} />
        {/* <Route path='/signup' element={<SignUp setUser={setUser} />} /> */}
        {
          user &&
          <>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </>
        }

      </Routes>
      <Footer />
    </Box>
  )
}

export default App;
