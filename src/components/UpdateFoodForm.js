import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import * as foodLogService from '../utilities/foodlog-service'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack, Button } from '@mui/material';

const UpdateFoodForm = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const food = location.state

    const [foodDetails, setFoodDetails] = useState(food)

    const handleChange = e => {
        setFoodDetails({
            ...foodDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await foodLogService.updateFood(foodDetails)

            if (res.status === 200) navigate(`/foodlog/${foodDetails._id}`, { state: foodDetails })
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
                    id="food"
                    label="Food"
                    name="food"
                    defaultValue=""
                    onChange={handleChange}
                    value={foodDetails.food}
                    placeholder={food.food}
                />
                <TextField
                    required
                    id="calories"
                    label="Calories"
                    name='calories'
                    type="number"
                    onChange={handleChange}
                    value={foodDetails.calories}
                    placeholder={foodDetails.calories}

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
            <Button onClick={handleSubmit}>Edit food</Button>
        </Box>
    )
}

export default UpdateFoodForm;