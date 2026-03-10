import { IOneCard } from '../interface/interface';
import './cardOne.component.css'


const CardOneComponent = (props: IOneCard) => { 
 
  
    return (
        <div className='card-one'>
            <div>{props.item.name}</div>
            <div>{props.item.family}</div>
            <div>{props.item.description}</div>
        </div>
    
    )
}
export default CardOneComponent;