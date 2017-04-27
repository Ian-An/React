import axios from 'axios';

const API_KEY = '658535f4e7b422cffd980f157d47d84a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
 
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`; // Country Code : us
	const request = axios.get(url);
	console.log(request);

	return { 
		type: FETCH_WEATHER,
		payload: request

	};
}