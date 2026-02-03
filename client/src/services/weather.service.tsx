import { IServiceFunction } from "./interface.service";
import { HOST } from '../environment';

function WeatherService() {
    return {

        fetchWeather() {
            return fetch(HOST + '/home/GetScore')
                .then(a => {
                    return a.json();
                })
        },
        createScore(name: string) {
            return fetch(HOST + `/home/CreateScore?name=${name}`,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: 'value' })})
                .then(a => {
                    return a.text();
                })
        }
    }
   
}

export default WeatherService;