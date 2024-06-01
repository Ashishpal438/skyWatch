import axios from 'axios';
import {X_RapidAPI_Host, X_RapidAPI_Key} from '../constants/index';

const apiCall = async ({city}) => {
  const options = {
    method: 'GET',
    url: `https://open-weather13.p.rapidapi.com/city/${city}/EN`,
    headers: {
      'X-RapidAPI-Key': X_RapidAPI_Key,
      'X-RapidAPI-Host': X_RapidAPI_Host,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchWeatherData = params => {
  return apiCall(params.toLocaleString());
};
