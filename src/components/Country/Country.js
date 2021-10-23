import React from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
class Country extends React.Component{
        render() {
            return(
                <div className='element-container' >
                        <motion.h3  initial={{opacity: 0}} transition={{duration: '0.5', type:'tween'}}  animate={{opacity: 1}} className='elements element1'>{this.props.countryName}</motion.h3>
                        <p className='elements element2'>{this.props.totalCases}</p>
                        <p className='elements element3'>{this.props.newCases}</p>
                        <p className='elements element4'>{this.props.totalDeaths}</p>
                        {/*<p className='elements element5'>{this.props.newDeaths}</p>*/}
                        {/*<p className='elements element6'>{this.props.totalRecovered}</p>*/}
                        {/*<p className='elements element7'>{this.props.newRecovered}</p>*/}
                        {/*<p className='elements element8'>{this.props.activeCases}</p>*/}
                        {/*<p className='elements element9'>{this.props.seriousCases}</p>*/}
                        {/*<p className='elements element10'>{this.props.totalTests}</p>*/}

                        <Link to={`/countries/${this.props.countryName.toLowerCase()}`}>
                            <button>Details</button>
                        </Link>
                </div>
            )
        }


}

export default Country;