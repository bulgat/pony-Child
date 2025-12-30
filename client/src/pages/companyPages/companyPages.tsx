import { useEffect, useState } from "react";
import { HOST } from '../../environment';
interface Props {}

const CompanyPage = (props: Props) => {

    const [list, setList] = useState([]);
 

    useEffect(() => {
  
        fetch(HOST+'/weather')
                .then(a => {
                    console.log('000 YYYYY', a)
                    return a.json();
                }).then(b => {
                    console.log('001 YYYYY', b);
                    setList(b);
       
                })
                .catch(err => {
                    console.log('error = ', err)
                })
   
    },[]);




    return (
        <div><h3>Company</h3>
            <ul>
                {list.map((a:any) => { return <li>{a.date}</li> })}
            </ul>
        </div>
    
    )
}
export default CompanyPage;