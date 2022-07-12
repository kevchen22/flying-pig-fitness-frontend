import React from 'react';
import { Typography, Stack } from '@mui/material'


const FoodInfo = ({ item }) => {
    return (
        <Stack sx={{
            border: 1,
            flexWrap: 'wrap',
            mt: 2,
            alignItems: 'center'
            }}>
            <Typography variant='h3' sx={{m: 2}}>{item.name}</Typography>
            <Typography sx={{m: 1}}>Serving Size (grams): {item.serving_size_g}</Typography>
            <Typography sx={{m: 1}}>Calories: {item.calories}</Typography>
            <Typography sx={{m: 1}}>Protein (grams): {item.protein_g}</Typography>
            <Typography sx={{m: 1}}>Total Fat (grams): {item.fat_total_g}</Typography>
            <Typography sx={{m: 1}}>Saturated Fat (grams): {item.fat_saturated_g}</Typography>
            <Typography sx={{m: 1}}>Total Carbs (grams): {item.carbohydrates_total_g}</Typography>
            <Typography sx={{m: 1}}>Fiber (grams): {item.fiber_g}</Typography>
            <Typography sx={{m: 1}}>Sugar (grams): {item.sugar_g}</Typography>
            <Typography sx={{m: 1}}>Sodium (milligrams): {item.sodium_mg}</Typography>
            <Typography sx={{m: 1}}>Potassium (milligrams): {item.potassium_mg}</Typography>
        </Stack>
    );
}

export default FoodInfo;
