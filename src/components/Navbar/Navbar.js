import {Link, BrowserRouter as Router} from "react-router-dom";

const Navbar = () => {
    return(
        <div className='navbar'>
                <ul className='nav_elements'>
                    <Link to='/'>
                        <li className='nav_element nav1'>Home</li>
                    </Link>
                    <Link to='/countries'>
                        <li className='nav_element nav1'>Countries</li>
                    </Link>
                    <Link to='/about'>
                        <li className='nav_element nav2'>About</li>
                    </Link>
                    <Link to='/socials'>
                        <li className='nav_element nav3'>Socials</li>
                    </Link>
                </ul>
        </div>

    )
}
export default Navbar;