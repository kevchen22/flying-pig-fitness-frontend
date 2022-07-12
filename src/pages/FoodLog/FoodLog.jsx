import { useState, useEffect } from 'react'
import { getFood } from '../../utilities/foodlog-service'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography, Button } from '@mui/material'


const FoodLog = () => {
    const [foodLog, setFoodLog] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const foodLogRes = await getFood()
            setFoodLog(foodLogRes.data)
        })()
    }, [])

    return (
        <Stack id='food-wrapper'>
            <Button
                variant="contained"
                color="error"
                href="/foodlog/create"
                sx={{
                    backgroundColor: '#fda7fe',
                    padding: '10px',
                    mt: 5
                }}
            >Add Food</Button>

            <Stack id='food-container'>
                {
                    foodLog.map(food =>
                        <Stack
                            className="card"
                            id='food-card'
                            key={foodLog._id}
                            onClick={() => navigate(`/foodlog/${foodLog._id}`, { state: food })}
                            flexWrap="wrap"
                            direction="row"
                        >
                            <Stack sx={{
                                mt: 1,
                                maxWidth: '300px',
                                border: 1,
                                alignItems: 'center'
                            }}>
                                <Typography variant="h6" sx={{
                                    mr: 3,
                                    mt: 1
                                }}>Food: {food.food}</Typography>
                                <Typography sx={{
                                    mr: 3,
                                    mt: 1
                                }}>Calories: {food.calories}</Typography>
                                <Typography sx={{
                                    mr: 3,
                                    mt: 1
                                }}>Protein (grams): {food.protein}</Typography>
                                <Typography sx={{
                                    mr: 3,
                                    mt: 1
                                }}>Carbohydrates (grams): {food.carbs}</Typography>
                                <Typography sx={{
                                    mr: 3,
                                    mt: 1,
                                }}>Total Fiber (grams): {food.fiber}</Typography>
                                <Typography sx={{
                                    mr: 3,
                                    mt: 1,
                                }}>Total Fat (grams): {food.fat}</Typography>
                                <Typography sx={{
                                    mr: 3,
                                    mt: 1,
                                }}>Sugar (grams): {food.sugar}</Typography>
                                <Typography sx={{
                                    mr: 3,
                                    mt: 1,
                                }}>Date: {food.date}</Typography>
                                <Button
                                    onClick={() => navigate(`/foodlog/${foodLog._id}/edit`, { state: food })}
                                    sx={{
                                        backgroundColor: '#fda7fe',
                                        padding: '10px',
                                        mt: 2
                                    }}
                                >
                                    Edit
                                </Button>
                            </Stack>
                        </Stack>
                    )
                }

            </Stack>
        </Stack>
    )
}

export default FoodLog;