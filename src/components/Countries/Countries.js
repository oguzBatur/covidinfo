import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import Country from "../Country/Country";
import {Switch, Route, withRouter} from 'react-router-dom';
import CountryDetails from "../CountryDetails/CountryDetails";

class Countries extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            twenty: 20
        }
    }
    componentDidMount() {
        this.setState({twenty: 20})
        console.log('Countries has been mounted!')
    }

    componentWillUnmount() {
        this.setState({twenty: 20})
        console.log('Countries has been unmounted!')

    }

    render(){

        const allCountries = () => {
            return Object.keys(this.props.countryData).map((country) => {
                if (Number(country) > 7) {
                    return <Country key={country} countryName={this.props.countryData[country].country}
                                    totalCases={this.props.countryData[country].totalCases}
                                    totalRecovered={this.props.countryData[country].totalRecovered}
                                    totalDeaths={this.props.countryData[country].totalDeaths}/>
                }
            });
        }
        const countryDetails = () => {

            return Object.keys(this.props.countryData).map((country) => {
                if (Number(country) > 7){
                    return <Route path={`/countries/${this.props.countryData[country].country.toLowerCase()}`} render={(no) => <CountryDetails key={this.props.countryData[country].country} totalDeaths={this.props.countryData[country].totalDeaths} totalCases={this.props.countryData[country].totalCases} countryName={this.props.countryData[country].country} newCases={this.props.countryData[country].newCases} newDeaths={this.props.countryData[country].newDeaths} totalRecovered={this.props.countryData[country].totalRecovered} newRecovered={this.props.countryData[country].newRecovered} activeCases={this.props.countryData[country].activeCases} seriousCases={this.props.countryData[country].seriousCases} totalTests={this.props.countryData[country].totalTests} population={this.props.countryData[country].population}/>}/>
                }
            });
        }
        const limited = allCountries().slice(0, this.state.twenty);

        const limitChecker = () =>{
            if(this.state.twenty <= allCountries().length)
            {
                return (
                    <div  className='load-controller'>
                        {limited}
                        <p onClick={() => {
                            this.setState({twenty: this.state.twenty + 20})
                            console.log(this.state.twenty);
                        }}
                           className='load-more'>Load More...</p>
                    </div>
                )
            }else{
                return (
                    <motion.div >
                        {limited}
                        <p className='load-note'>All countries have been displayed.</p>
                    </motion.div>
                )
            }
        }
        const countryList = () => {

            return(
                <AnimatePresence exitBeforeEnter>
                    {!this.props.countryData && (
                        <motion.h2
                            key='loader'
                            initial={{opacity: 0, y: -100, scale: .7}}
                            animate={{opacity: 1, y: 0, scale: 1}}
                            exit={{opacity: 0, y:100, scale: .6}}
                            className='loader'
                        >
                            Loading...</motion.h2>
                    )}
                    {this.props.countryData && (

                        <motion.div key='information' initial={{opacity: 0}} animate={{opacity:1}} className='world-cases-general'>
                            <h1 className='world-cases-header'>Covid World Wide</h1>
                            {limitChecker()}
                        </motion.div>
                    )}
                </AnimatePresence>
            )
        }
        return(

                <Switch>
                    {countryDetails()}   {/* Routelar! */} 
                    <Route component={countryList}/> {/* Ülke Listemiz. */}
                </Switch>
        )

    }


}

export default withRouter(Countries);