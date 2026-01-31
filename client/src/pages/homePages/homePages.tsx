import { useState } from "react";
import { useEffect } from "react";
import InternetService from '../../services/internet.service'
import { IServiceFunction } from "../../services/interface.service";
interface Props {}

interface IUser {
    UserId: number;
    id: number;
    title: string;
    body: string;
}

const HomePage = (props: Props) => {
    const _internetService: IServiceFunction = InternetService();
    const [data, setData] = useState([] as IUser[]);
    useEffect(() => {

        _internetService.fetchJsonData()
            .then((response: any)=> {
                 console.log('=========', response)
                 return response.json();
             }).then((data: any)  => {
                 setData(data);
             })

    },[]);


    return (
        <>
            <div>Home</div>
            {_internetService.GetNum() }
            <div> {data.map((item) => ( <div key={item.id}> <h2>- {item.title}</h2> <p>{item.body}</p> </div> ))} </div>
        </>
    )
}
export default HomePage;