// Imports
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

// Pages
import Home from '../Home/Home';

// Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ExerciseDetail from '../ExerciseDetail/ExerciseDetail';

const App = () => {
  return(
    <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box> 
  )
}

export default App;
