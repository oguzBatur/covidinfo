import {withRouter} from "react-router-dom";

const CountryDetails = ({countryName, totalCases, totalDeaths, newCases, newDeaths, totalRecovered, newRecovered,activeCases,seriousCases,totalTests,population}) => {
    console.log(countryName)
    return(
        <div className='general-country-container'>
               <h1 className='general-country-header'>{countryName}</h1>
           <div className='country-container'>
               <p className='general-country first'>
                   <p>Total Cases</p>
                   {totalCases}</p>
               <p className='general-country second'>
                   <p>New Cases</p>
                   {newCases}</p>
               <p className='general-country third'>
                   <p>Total Deaths</p>
                   {totalDeaths}</p>
               <p className='general-country fourth'>
                   <p>New Deaths</p>
                   {newDeaths}</p>
               <p className='general-country fifth'>
                   <p>Total Recovered</p>
                   {totalRecovered}</p>
               <p className='general-country sixth'>
                   <p>New Recovered</p>
                   {newRecovered}</p>
               <p className='general-country seventh'>
                   <p>Active Cases</p>
                   {activeCases}</p>
               <p className='general-country eighth'>
                   <p>Serious Cases</p>
                   {seriousCases}</p>
               <p className='general-country ninth'>
                   <p>Total Tests</p>
                   {totalTests}</p>
               <p className='general-country tenth'>
                   <p>Population</p>
                   {population}</p>
           </div>
        </div>
    )
}

export default withRouter(CountryDetails);