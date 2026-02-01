import { FormEventHandler, MouseEventHandler, useState } from "react";
import { useEffect } from "react";
import InternetService from '../../services/internet.service'
import { IServiceFunction } from "../../services/interface.service";
import { IUser } from '../../interface/interface'

interface Props {

}
interface IDynamicButton {
    func():void;
}

const HomePage = (props: Props) => {
    const _internetService: IServiceFunction = InternetService();
    const [data, setData] = useState([] as IUser[]);

    const dynamicButtonList: IDynamicButton[] = [
        {
            func:  () =>{
                return clickOne();
            }
        },
        {
            func:  ()=> {
                return clickSecond();
            }
        },
    ];

    useEffect(() => {

        _internetService.fetchJsonData()
            .then((response: any)=> {

                 return response.json();
             }).then((data: any)  => {
                 setData(data);
             })

    },[]);

    const clickOne = ()=>{
        alert('one ' )
    }
    const clickSecond = () => {
        alert('sec ')
    }

    return (
        <>
            <h2>Home</h2>
            <img src='./arsenal.jpg'/>
            {_internetService.GetNum() }
            <div> {data.map((item) => (
                <div key={item.id}>
                    <h2>- {item.name}</h2>
                    <p>{item.numCannon}</p>
                    <button onClick={() => { dynamicButtonList[1].func(); }}>one</button>
                </div>))}
            </div>
        </>
    )
}
export default HomePage;