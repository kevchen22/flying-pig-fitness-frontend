import axios from 'axios'
import { getToken } from './users-service'

const BASE_URL = 'http://flying-pig-fitness-backend.herokuapp.com/api/v1/workouts'


const setOptions = () => {
     return {headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json'
    }}
}

export const getWorkout = async () => {
    try {
        const response = await axios.get(BASE_URL, setOptions())

        return response
    } catch (e) {
        console.log(e)
    }
}

export const createWorkout = async workoutDetails => {
    try {
        const createdWorkout = await axios.post(BASE_URL, workoutDetails, setOptions())
        return createdWorkout
    } catch (e) {
        console.log(e)
    }
}

export const updateWorkout = async newWorkoutDetails => {
    try {
        const updatedWorkout = await axios.put(`${BASE_URL}/${newWorkoutDetails._id}`, newWorkoutDetails, setOptions())
        return updatedWorkout
    } catch (e) {
        console.log(e)
    }
}

export const deleteWorkout = async id => {
    try {
        const deletedWorkout = await axios.delete(`${BASE_URL}/${id}`, setOptions())
        return deletedWorkout
    } catch (e) {
        console.log(e)
    }
}