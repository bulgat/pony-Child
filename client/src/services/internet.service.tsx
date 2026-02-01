import { IServiceFunction } from "./interface.service";
import { HOST } from '../environment';

function InternetService():IServiceFunction {
    return {
        GetNum() {
            return 66;
        },
        fetchJsonData() {
            return fetch(HOST + '/arsenal/GetArsenal');
                //const data = await response.json();
                //setData(data);

        }
    }
    /*
    async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setData(data);
    }
    fetchData();
    */
}

export default InternetService;