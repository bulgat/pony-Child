import { useCallback, useEffect, useRef, useState, createContext } from 'react';
import './searchPages.css';
import Student from './student';
import UserList from './userList';
import ContextCustom from './ContextCustom';

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
        setRender((current)=>!current)
    }

    function logPerson<T extends object = IPerson>(person:T) {

    }

    ChangePerson({ id: 1, role: "tt", admin: "yuiu" });
    ChangePerson({});
    ChangePerson(new Person());

    const funcPrint = useCallback(() => {

        console.log("Print=");
    },[]);

    const userList = [{ name: "kol" }, { name: "stop" }, { name: "dog" }];

    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current++;
    })

    const Context = createContext({name:"kkkkkkk"});
    const send = { name: "joy" };

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
            <ContextCustom value={send}>
            {render &&
                <div>
                    <Student name="Kol Krik" age={30} func={funcPrint} />
                    <Student name="000 Krik" age={35} func={funcPrint} />
                    <Student />
                </div>
            }
            </ContextCustom>
            <button onClick={RenderHandler}>Render</button>
            <div>
                <UserList userList={userList} />
            </div>
            <div>Render count: {renderCount.current}</div>
        </>
    )
}
export default SearchPage;

