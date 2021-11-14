import {Link,withRouter} from "react-router-dom";
import {motion} from "framer-motion";
import React from "react";
import Country from "../Country/Country";
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCountry: null
        }
    }

    render()
    {
               
        return(
            <div className='navbar'>
               
                <ul className='nav_elements'>
                    <Link to='/'>
                        <motion.li  whileHover={{scale: 1.1, textDecoration: "underline", transition: {duration: 0.4}}} className='nav_element nav1'>Home</motion.li>
                    </Link>
                    <Link to='/countries'>
                        <motion.li whileHover={{scale: 1.1, textDecoration: "underline", transition: {duration: 0.4}}} className='nav_element nav1'>Countries</motion.li>
                    </Link>
                    <Link to='/about'>
                        <motion.li whileHover={{scale: 1.1, textDecoration: "underline", transition: {duration: 0.4}}} className='nav_element nav2'>About</motion.li>
                    </Link>
                    <Link to='/socials'>
                        <motion.li whileHover={{scale: 1.1, textDecoration: "underline", transition: {duration: 0.4}}} className='nav_element nav3'>Socials</motion.li>
                    </Link>
                </ul>
            </div>

        )
    }

}
export default withRouter(Navbar);