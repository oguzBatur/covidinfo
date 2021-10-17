import './App.css';
import React from 'react';
import {motion} from 'framer-motion';
import Countries from "./components/Countries/Countries";
import Navbar from "./components/Navbar/Navbar";

class  App extends React.Component {
  constructor()
  {
    super();
    this.state = {
        latestTotals: '',
        all_countries: '',
        total_deaths: ''

    }
  }

    componentDidMount = () => {
        this.fetchData()
        setInterval(this.fetchData, 900000)
    }

    fetchData = () => {
        fetch('http://localhost:3001')
            .then(res => res.json())
            .then(data => {
                this.setState({latestTotals: data.totalCases});
            });
        fetch('http://localhost:3001/countries')
            .then(res => res.json())
            .then(data => {
                this.setState({all_countries: data, total_deaths: data[7].totalDeaths})
            })


    }

  render()
  {

    const totalData = () => {
        const {all_countries} = this.state;
        return(
          <div>
              <div className='main-general'>
                  <Navbar/>
                  <div className='background'/>
                  <motion.h1 initial={{opacity: 0}} transition={{duration: '0.5', type:'tween'}}  animate={{fontSize: '50px', opacity: 1}} className='main-header'>
                      Welcome to Covid Tracker
                  </motion.h1>
                  <h1 className='place-holder'/>
                  <motion.div initial={{opacity: 0, y: '20px'}} animate={{opacity: 1, y: '0px'}} transition={{delay: '0.5', duration:'1'}} className='total-death-div'>
                      <h2 className='total-death-header'>Total Cases Worldwide </h2>
                      <motion.p  initial={{opacity: 0, y: '20px'}} animate={{opacity: 1, y: '0px'}} transition={{delay: '2', duration:'1'}} className='total-death-info'>{this.state.latestTotals}</motion.p>
                  </motion.div>
                  <motion.div initial={{opacity: 0, y: '20px'}} animate={{opacity: 1, y: '0px'}} transition={{delay: '1', duration:'1'}} className='total-death-div'>
                      <h2 className='total-death-header'>Total Deaths Worldwide </h2>
                      <motion.p  initial={{opacity: 0, y: '20px'}} animate={{opacity: 1, y: '0px'}} transition={{delay: '3', duration:'1'}} className='total-death-info'>{this.state.total_deaths}</motion.p>
                  </motion.div>

                  <footer>Made by Oğuz Batur Sarıöz
                      <i className="fab fa-github"/>
                  </footer>
              </div>

              <div className='world-cases-general'>
                  <h1 className='world-cases-header'>World Wide Cases</h1>
                  <div>
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
                      <Countries countryData={all_countries}/>

                  </div>
              </div>
          </div>

        ) 
    }
    return (
      <div className="App">
          {totalData()}
     
      </div>
    );
  }
  
}

export default App;
