import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Country from "../Country/Country";
import {Switch, BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import CountryDetails from "../CountryDetails/CountryDetails";
const Countries = (props) => {

        const [twenty, setTwenty] = useState(20);
        const allCountries = () => {
            return Object.keys(props.countryData).map((country) => {
                if (Number(country) !== 0 && Number(country) !== 1 && Number(country) !== 2 && Number(country) !== 3 && Number(country) !== 4 && Number(country) !== 5 && Number(country) !== 6 && Number(country) !== 7) {
                    return <Country key={country} countryName={props.countryData[country].country}
                                    totalCases={props.countryData[country].totalCases}
                                    newCases={props.countryData[country].newCases}
                                    totalDeaths={props.countryData[country].totalDeaths}/>
                }
            });
        }
    const countryDetails = () => {

            return Object.keys(props.countryData).map((country) => {
            if (Number(country) !== 0 && Number(country) !== 1 && Number(country) !== 2 && Number(country) !== 3 && Number(country) !== 4 && Number(country) !== 5 && Number(country) !== 6 && Number(country) !== 7) {
                return <Route path={`/countries/${props.countryData[country].country.toLowerCase()}`} render={(no) => <CountryDetails totalDeaths={props.countryData[country].totalDeaths} totalCases={props.countryData[country].totalCases} countryName={props.countryData[country].country} newCases={props.countryData[country].newCases} newDeaths={props.countryData[country].newDeaths} totalRecovered={props.countryData[country].totalRecovered} newRecovered={props.countryData[country].newRecovered} activeCases={props.countryData[country].activeCases} seriousCases={props.countryData[country].seriousCases} totalTests={props.countryData[country].totalTests} population={props.countryData[country].population}/>}/>
            }
        });
    }

        const limited = allCountries().slice(0, twenty);
        const limitChecker = () =>{

            if(twenty <= allCountries().length)
            {
                return (
                    <div className='load-controller'>
                        {limited}
                        <p onClick={() => {
                            setTwenty(twenty + 20);
                            console.log(twenty);
                        }}
                        className='load-more'>Load More...</p>
                    </div>
                )
            }else{
                return (
                    <div>
                        {limited}
                        <p className='load-note'>All countries have been displayed.</p>
                    </div>
                )
            }
        }
        const countryList = () => {
            return(
                <AnimatePresence exitBeforeEnter>
                    {shouldAnimate && (

                        <motion.h2
                            key='loader'
                            initial={{opacity: 0}}
                            transition={{repeat: !!shouldAnimate}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0, repeat: 0}}
                            className='loader'
                        >
                            Loading...</motion.h2>
                    )}
                    {props.countryData && (

                        <motion.div key='information' initial={{opacity: 0}} animate={{opacity:1}} className='world-cases-general'>
                            <h1 className='world-cases-header'>World Wide Cases</h1>
                            <ul className='world-cases-info'>
                                <li>Country</li>
                                <li>Total Cases</li>
                                <li>New Cases</li>
                                <li>Total Deaths</li>
                                <li>New Deaths</li>
                                <li>Total Recovered</li>
                                <li>New Recovered</li>
                                <li>Active Cases</li>
                                <li>Serious Cases</li>
                                <li>Total Tests</li>
                                <li>Population</li>
                            </ul>
                            {limitChecker()}
                        </motion.div>
                    )}
                </AnimatePresence>
            )
        }
     const shouldAnimate = !props.countryData;
        return(

            <div>
                <Switch>
                    {countryDetails()}
                    <Route component={countryList}/>
                </Switch>
            </div>
        )







}

export default withRouter(Countries);