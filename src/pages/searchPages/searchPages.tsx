import { useState } from 'react';
import './searchPages.css';

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

    const [list, setList] = useState<string[]>([])

    function ChangePerson(person: any) {

        console.log("01--", (person instanceof Person), "  person =", person);
        if ("role" in person) {

        }
        list.push(`${list.length}) in: ${("role" in person)} instanceof: ${(person instanceof Person)} typeof: ${(typeof person)}`);

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
        </>
    )
}
export default SearchPage;