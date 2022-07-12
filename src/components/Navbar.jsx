import React from 'react';
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/images/Logo.png'


const Navbar = ({ user, setUser, logOut }) => {
    const handleLogOut = () => {
        setUser(null)
        logOut()
    }

    return (
        <Stack
            direction="row"
            justifyContent="space-around"
            sx={{
                gap: {
                    sm: '122px', xs: '20px'
                },
                justifyContent: 'none'
            }} px="20px">
            <Link to="/home">
                <img src={Logo} alt="logo" style={{
                    width: '100px', height: '100px', margin: '0 20px'
                }} />
            </Link>
            {
                user
                    ?
                    <>
                        <Stack
                            direction="row"
                            gap="40px"
                            fontSize="24px"
                            alignItems="flex-end"
                        >
                            <Link to='/home' style={
                                {
                                    textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'
                                }}>Home</Link>
                            <a href="/home#exercises" style={
                                {
                                    textDecoration: 'none', color: '#3A1212'
                                }}>Exercises</a>
                            <Link className="nav-link" to="/workouts">Workout Log</Link>
                            <Link className="nav-link" to="/food">Food Nutrition</Link>
                            <Link className="nav-link" to="/foodlog">Food Diary</Link>
                            <Link className="nav-link" onClick={handleLogOut} to="/">Logout</Link>
                        </Stack>

                    </>
                    :
                    <Stack
                        direction="row"
                        gap="40px"
                        fontSize="24px"
                        alignItems="flex-end"
                    >
                        <Link className="nav-link" to="/signup" style={
                            {
                                textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'
                            }}>Sign Up</Link>


                        <Link className="nav-link" to="/login">Login</Link>
                        </Stack>
            }


                    </Stack >
    );
}

            export default Navbar;
