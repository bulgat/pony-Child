import { useEffect, useState } from "react";
import { HOST } from '../../environment';
import WeatherService from '../../services/weather.service'
interface Props {}

const CompanyPage = (props: Props) => {
    const _weatherService = WeatherService();
    const [list, setList] = useState([]);
    const [result, setResult] = useState('');

    useEffect(() => {
        _weatherService.fetchWeather().then(b => {

            setList(b);

            })
            .catch(err => {
                console.log('error = ', err)
            })
   
    },[]);

    const hadleSubmit = (formData: any) => {

        setResult(formData);
    }
    const createScore = () => {
        _weatherService.createScore(result)
            .then(response => {

                alert(response)
            }).catch(error => {
                console.log('09 Y', error);
            })
    }

    return (
        <div>
            <h3>Company</h3>
                <div>
                new score: <input type='text' name='login' onChange={(e) => { hadleSubmit(e.target.value) }} />
                <button onClick={createScore}>Create</button>
                </div>
            <ul>
                {list.map((a:any) => { return <li>{a.name}</li> })}
            </ul>
        </div>
    
    )
}
export default CompanyPage;