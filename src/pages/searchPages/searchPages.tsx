import { useState } from 'react';
import './searchPages.css';
import Student from './student';

interface Props { }
interface IPerson {
    id: number;
    role: string;
    admin: string;
}
class Person implements IPerson {
    id = 0;
    role = "kol";
    admin = "test";
}

const SearchPage = (props: Props) => {

    const [render, setRender] = useState(false);
    const [list, setList] = useState<string[]>([])

    function ChangePerson(person: any) {


        if ("role" in person) {

        }
        list.push(`${list.length}) in: ${("role" in person)} instanceof: ${(person instanceof Person)} typeof: ${(typeof person)}`);

    }

    const RenderHandler = () => {
        console.log("01-- rson =" );
        setRender((current)=>!current)
    }

    function logPerson<T extends object = IPerson>(person:T) {

    }

    ChangePerson({ id: 1, role: "tt", admin: "yuiu" });
    ChangePerson({});
    ChangePerson(new Person());

    return (
        <>
            <div>Search</div>
            <div className="container">
                <div className="box"></div>
            </div>
            <div>
                <ul>
                    {list.map((a) => {
                        return <li key={a}>{a}</li>;
                    })}
                </ul>
            </div>
            {render &&
                <div>
                    <Student name="Kol Krik" age={30} />
                    <Student name="000 Krik" age={35} />
                    <Student />
                </div>
            }
            <button onClick={ RenderHandler }>Render</button>
        </>
    )
}
export default SearchPage;