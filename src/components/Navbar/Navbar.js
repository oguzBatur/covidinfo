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
        const checkForCountry = (event) => {
            // eslint-disable-next-line array-callback-return
                return Object.keys(this.props.countryData).map(c => {
                    if(event.target.value.toLowerCase() === this.props.countryData[c].country.toLowerCase()){
                        this.setState({currentCountry: c});
                    }
                    else if(event.target.value === '' || event.target.value === ' ')
                    {
                        this.setState({currentCountry : null})
                    }

                })

        }
        const returnSearch = () => {

            if(this.state.currentCountry !== null && this.state.currentCountry >= 8 && this.state.currentCountry<= 231 && this.props.location.pathname === '/countries')
            {
                return(
                    <div className='countries'>
                        <Country
                            totalCases={this.props.countryData[this.state.currentCountry].totalCases}
                            countryName={this.props.countryData[this.state.currentCountry].country}
                            totalDeaths={this.props.countryData[this.state.currentCountry].totalDeaths}
                            totalRecovered={this.props.countryData[this.state.currentCountry].totalRecovered}
                        />
                    </div>
                )
            }
        }
        const displayBar = () => {
            if(this.props.location.pathname === '/countries'){
                return <motion.input initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} onChange={checkForCountry} type="text" placeholder='Search Countries...'/>

            }
        }
        return(
            <div className='navbar'>
                <div>
                    {displayBar()}
                    {returnSearch()}
                </div>
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