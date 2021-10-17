import React from "react";
import {motion} from "framer-motion";

class Countries extends React.Component {
    constructor(props) {
        super(props);


    }


    getData(){
       return Object.keys(this.props.countryData).map(item => {
           if (item != 0 && item != 1 && item != 2 && item != 3 && item != 4 && item != 5 && item != 6 && item != 7){
               return(
                   <div className='element-container'>
                       <motion.h3 initial={{opacity: 0}} transition={{duration: '0.5', type:'tween'}}  animate={{opacity: 1}} className='elements element1'>{this.props.countryData[item].country}</motion.h3>
                       <p className='elements element2'>{this.props.countryData[item].totalCases}</p>
                       <p className='elements element3'>{this.props.countryData[item].newCases}</p>
                       <p className='elements element4'>{this.props.countryData[item].totalDeaths}</p>
                       <p className='elements element5'>{this.props.countryData[item].newDeaths}</p>
                       <p className='elements element6'>{this.props.countryData[item].totalRecovered}</p>
                       <p className='elements element7'>{this.props.countryData[item].newRecovered}</p>
                       <p className='elements element8'>{this.props.countryData[item].activeCases}</p>
                       <p className='elements element9'>{this.props.countryData[item].seriousCases}</p>
                       <p className='elements element10'>{this.props.countryData[item].totalTests}</p>
                       <p className='elements element11'>{this.props.countryData[item].population}</p>
                   </div>
               )
           }

       })
    }
    render() {
        return(
            <div>
                {this.getData()}
            </div>
        )
    }




}

export default Countries