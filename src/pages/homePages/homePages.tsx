import { useState } from "react";
import { useEffect } from "react";

interface Props {}

interface IUser {
    UserId: number;
    id: number;
    title: string;
    body: string;
}

const HomePage = (props: Props) => {

    const [data, setData] = useState([] as IUser[]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setData(data);
        }
        fetchData();
    },);


    return (
        <>
        <div>Home</div>
            <div> {data.map((item) => ( <div key={item.id}> <h2>- {item.title}</h2> <p>{item.body}</p> </div> ))} </div>
        </>
    )
}
export default HomePage;