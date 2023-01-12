import axios from 'axios'
import { getToken } from './users-service'

const BASE_URL = 'http://flying-pig-fitness-backend.herokuapp.com/api/v1/foodlog'


const setOptions = () => {
     return {headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json'
    }}
}

export const getFood = async () => {
    try {
        const response = await axios.get(BASE_URL, setOptions())

        return response
    } catch (e) {
        console.log(e)
    }
}

export const createFood = async foodDetails => {
    try {
        const createdFood = await axios.post(BASE_URL, foodDetails, setOptions())
        return createdFood
    } catch (e) {
        console.log(e)
    }
}

export const updateFood = async newFoodDetails => {
    try {
        const updatedFood = await axios.put(`${BASE_URL}/${newFoodDetails._id}`, newFoodDetails, setOptions())
        return updatedFood
    } catch (e) {
        console.log(e)
    }
}

export const deleteFood = async id => {
    try {
        const deletedFood = await axios.delete(`${BASE_URL}/${id}`, setOptions())
        return deletedFood
    } catch (e) {
        console.log(e)
    }
}