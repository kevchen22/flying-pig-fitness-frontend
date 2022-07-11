import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material'

import BannerImage from '../../assets/images/Banner.png'

const LandingPage = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '50px' }
        }}
            position="relative" p="20px"
        >
            <Typography color='#FF2625'
                fontWeight="600"
                fontSize="50px"
            >
                Flying Pig Fitness Club
            </Typography>
            <Typography fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '40px' } }}
                mb="23px" mt="30px">
                We made pigs fly, so you can get<br />  the body of your dreams!
            </Typography>
            <Typography fontSize="22px"
                lineHeight="35px"
                mb={4}
            >
                Check out the most effective exercises!
            </Typography>
            <Typography
                fontWeight={600}
                color="#ff2625"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none' }
                }}
                fontSize="200px"
            >
                Exercise
            </Typography>
            <img src={BannerImage} alt='Banner' className="banner"></img>
        </Box >
    );
}

export default LandingPage;
