import { Link } from "react-router";
import './Navbar.css';

interface Props { }

const Navbar = (props: Props) => {
    return (
        <div className='menu-top'>
            <div className='menu-button'>
                <Link to="/">home</Link>
            </div>
            <br />
            <div className='menu-button'>
                <Link to="search">search</Link>
            </div>
            <br />
            <div className='menu-button'>
                <Link to="company/1">company</Link>
            </div>
            <br />
            <div className='menu-button'>
                <Link to="money">money</Link>
            </div>
            <br />
            <div className='menu-button'>
                <Link to="table">table</Link>
            </div>
            <br />
            <div className='menu-button'>
                <Link to="webform">webform</Link>
            </div>
        </div>
    )
}
export default Navbar;