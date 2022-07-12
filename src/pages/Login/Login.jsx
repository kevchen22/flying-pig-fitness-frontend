import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../utilities/users-service'
import { Typography, Stack, Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

const Login = ({ setUser }) => {
    const [message, setMessage] = useState("We will not share your email with anyone else.")
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleChange = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const user = await login(credentials)
            console.log(user)
            if (user) {
                setUser(user)
                navigate('/home')
            } else {
                throw new Error
            }
        } catch (e) {
            setMessage('Log in Failed - Try Again')
        }
    }

    return (
        <Stack>
            <Typography variant='h3' sx={{ marginTop: 2 }}>Login</Typography>
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
                <Stack>
                    <TextField
                        required
                        id="outlined-password-input"
                        type="email"
                        label="Email Address"
                        name="email"
                        defaultValue=""
                        onChange={handleChange}
                        value={credentials.email}
                    />
                    <Stack id="emailHelp" className="form-text">{message}</Stack>
                </Stack>
                <Stack className="mb-3">
                    <TextField
                        required
                        type="password"
                        id="outlined-password-input"
                        label="Password"
                        name='password'
                        onChange={handleChange}
                        value={credentials.password}
                    />
                </Stack>
                <Button type="submit" >Submit</Button>
            </Box>
        </Stack>
    );
}

export default Login;