import axios from "axios"
import { GET_WEATHER_FAIL, GET_WEATHER_LOADING, GET_WEATHER_SUCSESS } from "../actionType/actionType"

export const getWeather = query => async dispatch => {
    dispatch({type : GET_WEATHER_LOADING })
    try {
        const res = await axios.get (`http://api.weatherapi.com/v1/forecast.json?key=b769c99ec7ee47bba82150228222611&q=${query}&days=5&aqi=no&alerts=no`)
        dispatch({type : GET_WEATHER_SUCSESS, payload : res.data})
    } catch (error) {
        console.log(error)
        dispatch ({type : GET_WEATHER_FAIL, payload : error})
    }
} 