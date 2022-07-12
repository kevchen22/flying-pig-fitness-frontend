import { useState } from 'react'
import * as foodLogService from '../../utilities/foodlog-service'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack, Button } from '@mui/material';



const CreateFood = () => {
    // If you don't specifically define object properties in your state, if you set your state anywhere in your code, it will automatically create the state object property for you.
    const [foodDetails, setFoodDetails] = useState({
        food: '',
        calories: 0,
        protein: 0,
        carbs: 0,
        fiber: 0,
        fat: 0,
        sugar: 0,
        date: ''
    })

    const navigate = useNavigate()

    const handleChange = e => {
        setFoodDetails({
            ...foodDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        foodLogService.createFood(foodDetails)
        navigate('/foodlog')
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
                    id="food"
                    label="Food"
                    name="food"
                    defaultValue=""
                    onChange={handleChange}
                    value={foodDetails.food}
                />
                <TextField
                    required
                    id="calories"
                    label="Calories"
                    name='calories'
                    type="number"
                    onChange={handleChange}
                    value={foodDetails.calories}

                />
                <TextField
                    id="protein"
                    label="Protein (grams)"
                    name='protein'
                    type="number"
                    onChange={handleChange}
                    value={foodDetails.protein}

                />
                <TextField
                    id="carbs"
                    label="Carbohydrates (grams)"
                    name='carbs'
                    type="number"
                    onChange={handleChange}
                    value={foodDetails.carbs}

                />
                <TextField
                    id="fiber"
                    label="Fiber"
                    name='fiber'
                    type="number"
                    onChange={handleChange}
                    value={foodDetails.fiber}

                />
                <TextField
                    id="fat"
                    label="Total Fat (grams)"
                    name='fat'
                    type="number"
                    onChange={handleChange}
                    value={foodDetails.fat}

                />
                <TextField
                    id="sugar"
                    label="Sugar (grams)"
                    name='sugar'
                    type="number"
                    onChange={handleChange}
                    value={foodDetails.sugar}

                />
                <TextField
                    id="date"
                    label="date"
                    name='date'
                    type="date"
                    onChange={handleChange}
                    value={foodDetails.date}

                />
            </Stack>
            <Button onClick={handleSubmit}>Add Food</Button>
        </Box>
    );
}

export default CreateFood;