import React, { useState } from 'react';
import { foodOptions, fetchData } from '../../utilities/fetchData';
import { Stack, Typography, Box, Button, TextField } from '@mui/material'
import FoodInfo from '../../components/FoodInfo';

const FoodNutrition = () => {
    const [ search, setSearch ] = useState('');
    const [result, setResult] = useState([{}])

    const handleSearch = async () => {
        if(search) {
            const query = '?query=' + search
            const foodData = await fetchData('https://calorieninjas.p.rapidapi.com/v1/nutrition' + query, foodOptions); 

                setSearch('');
                console.log(foodData);
                setResult(foodData.items)
        }
    }

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{
            fontSize: { lg: '44px', xs: '30px' }
        }}
            mb="50px"
            textAlign="center"
            color='#fff0d4'>
            Food Nutrition Data! Even our pigs are on a strict diet!
        </Typography>
        <Box position="relative" mb="72px">
            <TextField
            sx={{
                input: { 
                    fontWeight: '700', 
                    border: 'none', 
                    borderRadius: '4px'
                },
                width: { lg: '800px', xs: '350px' },
                backgroundColor: '#fff',
                borderRadius: '40px'
            }}
            height="76px"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Food"
            type="text"
            />
            <Button className="search-btn"
            sx={{
                bgcolor: '#fda7fe',
                color: '#fff',
                textTransform: 'none',
                width: { lg: '175px', xs: '80px'},
                fontSize: { lg: '20px', xs: '14px'},
                height: '56px',
                position: 'absolute',
                right: '0'
            }}
            onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
        <Box sx={{
            position: 'relative',
            width: '100%',
            p: '20px'
        }}>
        </Box>
        <Stack>
            {result.map(item => <FoodInfo item={item} /> )}
        </Stack>
    </Stack>
    );
}

export default FoodNutrition;
