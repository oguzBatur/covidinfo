import React from "react";
import {motion} from "framer-motion";
import {Link, withRouter} from "react-router-dom";
class Country extends React.Component{
        render() {
            return(
                <motion.div  initial={{y: -100, opacity:0}} animate={{y: 0, opacity:1}}  key={this.props.countryName} className='element-container' >
                        <h3 className='elements element1'>{this.props.countryName}</h3>
                        <p className='elements element2'>Total Cases <br/> <p>{this.props.totalCases}</p></p>
                        <p className='elements element4'>Total Deaths <br/> <p>{this.props.totalDeaths}</p></p>
                        <p className='elements element6'>Total Recovered <br/> <p>{this.props.totalRecovered}</p></p>
                        <Link to={`/countries/${this.props.countryName.toLowerCase()}`}>
                            <button className='details'>Details</button>
                        </Link>
                </motion.div>
            )
        }


}

export default withRouter(Country);