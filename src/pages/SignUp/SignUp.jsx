import { useState } from 'react'
import { signUp } from '../../utilities/users-service'
import { useNavigate } from 'react-router-dom'
import { Typography, Stack, Box, TextField, Button } from '@mui/material'

const SignUp = ({ setUser }) => {
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        picture: '',
        phone: '',
        age: 0,
        email: '',
        password: '',
        repassword: '',
        height: 0,
        weight: 0,
        active: true
    });

    const navigate = useNavigate()

    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const user = await signUp(newUser)
            // console.log(user)
            setUser(user)
            if (user) navigate('/home')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Stack>
            <Box onSubmit={handleSubmit}>

                <Typography variant='h3' sx={{ marginTop: 2 }}>Sign Up</Typography>
                <Stack sx={{
                    mt: 3
                }}>
                    <TextField
                        type="text"
                        id="form3Example1m"
                        label="First Name"
                        name='firstName'
                        value={newUser.firstName}
                        onChange={handleChange}
                        required
                    />
                </Stack>
                <Stack sx={{
                    mt: 3
                }}>
                    <TextField
                        type="text"
                        id="form3Example1n"
                        label='Last Name'
                        name='lastName'
                        value={newUser.lastname}
                        onChange={handleChange}
                        required
                    />
                </Stack>
                <Stack sx={{
                    mt: 3
                }}>
                    <TextField
                        type="number"
                        id="form3Example1m1"
                        label='Age'
                        name='age'
                        value={newUser.age}
                        onChange={handleChange}
                        required
                    />
                </Stack>
                <Stack sx={{
                    mt: 3
                }}>
                    <TextField
                        type="number"
                        id="form3Example1m1"
                        label='Height (in inches)'
                        name='height'
                        value={newUser.height}
                        onChange={handleChange}
                        required
                    />
                </Stack>
                <Stack sx={{
                    mt: 3
                }}>
                    <TextField
                        type="number"
                        id="form3Example1m1"
                        label="Weight (lbs)"
                        name='weight'
                        value={newUser.weight}
                        onChange={handleChange}
                    />
                </Stack>
                <Stack sx={{
                    mt: 3
                }}>
                    <TextField
                        type="text"
                        id="form3Example1n1"
                        label='Phone Number'
                        name='phone'
                        value={newUser.phone}
                        onChange={handleChange}
                    />
                </Stack>
                <Stack sx={{
                    mt: 3
                }}>
                    <TextField
                        type="email"
                        id="form3Example8"
                        label="Email Address"
                        name='email'
                        value={newUser.email}
                        onChange={handleChange}
                        required
                    />
                    <Stack sx={{
                        mt: 3
                    }}>
                        <TextField
                            type="password"
                            id="form3Example9"
                            label="Password"
                            name='password'
                            value={newUser.password}
                            onChange={handleChange}
                            required
                        />
                    </Stack>
                    <Stack sx={{
                        mt: 3
                    }}>
                        <TextField
                            type="password"
                            id="form3Example10"
                            label="Retype Password"
                            name='repassword'
                            value={newUser.repassword}
                            onChange={handleChange}
                            required
                        />
                    </Stack>
                </Stack>

                <Button onClick={handleSubmit}type='submit'>Submit</Button>
            </Box>
        </Stack >
    );
}

export default SignUp;