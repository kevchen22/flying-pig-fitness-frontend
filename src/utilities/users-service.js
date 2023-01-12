import axios from 'axios'

const BASE_URL = 'https://flying-pig-fitness-backend.herokuapp.com/api/v1/users'

export const login = async credentials => {
    try {

        const token = await axios.post(`${BASE_URL}/login`, credentials)

        localStorage.setItem('token', token.data)

        return getUser()
    } catch(e) {
        console.log(e)
    }
}

export const signUp = async newUser => {
    try {
        const token = await axios.post(BASE_URL, newUser)
        localStorage.setItem('token', token.data)
        return token
    } catch (e) {
        console.log(e)
    }
}

export const getToken = () => {

    const token = localStorage.getItem('token')

    if(!token) return null

    const payload = JSON.parse(atob(token.split('.')[1]))

    if(payload.exp * 1000 < Date.now()) {

        localStorage.removeItem('token')
        return null
    }


    return token
}

export const getUser = () => {
    const token = getToken()
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export const logOut = () =>  {
    localStorage.removeItem('token')
}