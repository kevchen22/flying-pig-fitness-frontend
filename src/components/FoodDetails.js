import { useLocation, useNavigate } from 'react-router-dom'
import { deleteFood } from '../utilities/foodlog-service'
import { Typography, Stack, Button } from '@mui/material'

const FoodDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const foodDetails = location.state


    const handleDelete = async () => {
        try {
            const res = await deleteFood(foodDetails._id)
            if(res.status === 200) navigate('/foodlog')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Stack sx={{
            alignItems: 'center',
            mt: 3,
            border: 1
        }}>
            <Typography>Date: {foodDetails.date}</Typography>
            <Typography>Food: {foodDetails.food}</Typography>
            <Typography>Calories: {foodDetails.calories}</Typography>
            <Typography>Protein (grams): {foodDetails.protein} </Typography>
            <Typography>Carbohydrates (grams): {foodDetails.carbs} </Typography>
            <Typography>Fiber (grams): {foodDetails.fiber} </Typography>
            <Typography>Fat (grams): {foodDetails.fat}</Typography>
            <Typography>Sugar (grams): {foodDetails.sugar}</Typography>
            <Button 
                onClick={() => navigate(`/foodlog/${foodDetails._id}/edit`, { state: foodDetails })}
                sx={{
                    backgroundColor: '#fda7fe',
                    padding: '10px',
                    mt: 2
                }}
            >
                Edit
            </Button>
            <Button  
                onClick={handleDelete}
                sx={{
                    backgroundColor: '#fda7fe',
                    padding: '10px',
                    mt: 1
                }}
            >
                Delete
            </Button>
        </Stack>
    );
}

export default FoodDetails;