import { Link } from "react-router";

interface Props { }

const Navbar = (props: Props) => {
    return (
        <div>
            <Link to="/">home</Link>
            <br/>
            <Link to="search">search</Link>
            <br />
            <Link to="company/1">company</Link>
            <br />
            <Link to="money">money</Link>
        </div>
    )
}
export default Navbar;