import { IOneCard } from '../interface/interface';
import './cardOne.component.css'


const SearchOneComponent = (props:any) => { 
 
  
    return (
        <div className='card-one'>
            <h6>{props.item}</h6>
        </div>
    
    )
}
export default SearchOneComponent;