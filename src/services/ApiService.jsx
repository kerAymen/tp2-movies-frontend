import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL || ""
const API_ENDPOINT = "/api/v1"
const MOVIES_URL = `${API_URL}${API_ENDPOINT}/movies`
const REVIEWS_URL = `${API_URL}${API_ENDPOINT}/reviews`


const api = axios.create({
    baseURL: API_URL
})


export const fetchMovies = async () => {
    try {
        const response = await api.get(MOVIES_URL)
        return response.data
    } catch(error) {
        console.error(error)
    }
    return undefined
}


export const fetchSingleMovie = async (movieId) => {     
    try {
        const response = await api.get(`${MOVIES_URL}/${movieId}`)
        return response.data
    } 
    catch (error) {
      console.error(error);
    }

}


export const postReview = async (body, imdbId) =>{
    try {
        const response = await api.post(REVIEWS_URL,{reviewBody:body,imdbId:imdbId});
        return response.data
    }
    catch(error) {
        console.error(error);
    }

    return undefined

}