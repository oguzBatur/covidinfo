import {withRouter} from "react-router-dom";
import {motion} from "framer-motion";

const CountryDetails = ({countryName, totalCases, totalDeaths, newCases, newDeaths, totalRecovered, newRecovered,activeCases,seriousCases,totalTests,population}) => {
    const dailyDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return(
        <motion.div initial={{opacity: 0, y: -100, scale: .6}}  animate={{opacity: 1, y: 0, scale: .8}} className='general-country-container'>
           <div className='country-container'>
               <h1 className='general-country-header'>{countryName.toUpperCase()} DAILY  CORONAVIRUS TABLE</h1>
               <div className="data-container">
                   <div className="first-row">
                       <p className='general-country second'>
                           <p>Daily <br/> Cases</p>
                           {newCases || '0'}</p>
                       <p className='general-country fourth'>
                           <p>Daily Deaths</p>
                           {newDeaths || 0}</p>
                   </div>
               <div className='date-container'>
                   <h3 className='date'>{dailyDate.getDate().toString()}</h3>
                   <h3 className='dateMonth'>{monthNames[dailyDate.getMonth()].toUpperCase()}</h3>
                   <h3 className='year'>{dailyDate.getFullYear().toString()}</h3>
               </div>
                   <div className="second-row">
                       <p className='general-country sixth'>
                           <p>Daily Recovered</p>
                           {newRecovered || 0}</p>
                       <p className='general-country seventh'>
                           <p>Active Cases</p>
                           {activeCases || 0}</p>
                   </div>
               </div>
                   <div className='footer-data'>
                       <p className='general-footer eighth'>
                           <p>Serious Cases</p>
                           {seriousCases || 0}</p>
                       <p className='general-footer ninth'>
                           <p>Total Tests</p>
                           {totalTests}</p>
                       <p className='general-footer tenth'>
                           <p>Population</p>
                           {population}</p>
                       <p className='general-footer first'>
                           <p>Total Cases</p>
                           {totalCases}</p>
                       <p className='general-footer third'>
                           <p>Total Deaths</p>
                           {totalDeaths}</p>
                       <p className='general-footer fifth'>
                           <p>Total Recovered</p>
                           {totalRecovered}</p>
                   </div>
           </div>
        </motion.div>
    )
}

export default withRouter(CountryDetails);