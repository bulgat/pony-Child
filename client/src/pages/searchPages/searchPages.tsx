import { useCallback, useEffect, useRef, useState, createContext } from 'react';
import './searchPages.css';
import Student from './student';
import UserList from './userList';
import ContextCustom from './ContextCustom';
import SearchOneComponent from '../../components/searchOne.component'
import { IDictionary } from '../../interface/interface';


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

const SearchPage = () => {

    const [render, setRender] = useState(false);
    const [list, setList] = useState<string[]>([])

    type ButtonSize = 'small' | 'medium';
    type ButtonTheme = 'primary' | 'second';
    type ButtonClass = `btn-${ButtonSize}-${ButtonTheme}`;

    const buttonCustomClass: ButtonClass = 'btn-medium-primary';
    //const buttonCustomClassError: ButtonClass = 'btn-huge-primary';

    

    const roles: Record<string, number | string> = {
        admin: 1,
        user: 2,
        guest:'test'
    };

    type Role = 'admin' | 'user' | 'guest';

    const roleStrict = {
        admin: 1,
        user: 2,
        guest: 3
    } as const satisfies Record<Role, number>

    function getRole(name: string) {
        return roles[name];
    }
    //не дает менять Shape - switch начинает ругаться
    type Shape = 'circle' | 'square';// |'kol';

    function area(shape: Shape): number {
        switch (shape) {
            case 'circle': return 1;
            case 'square': return 2;
            default: const _: never = shape;
                return _;
        }
    }

    interface Config {
        readonly port: number;
    }
    const config: Config = {port:3000}

    //config.port = 4000;
    function ChangePerson(person: any) {


        if ("role" in person) {
        console.log('Change person', getRole('admin'))
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

    const userList: IDictionary[] = [{ name: "kol" } as IDictionary,
        { name: "stop" } as IDictionary,
        { name: "dog" } satisfies IDictionary];

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
                        return <li><SearchOneComponent key={a} item={ a } /> </li>
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


