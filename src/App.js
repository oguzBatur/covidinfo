import './App.css';
import React from 'react';
import {motion} from 'framer-motion';
import Countries from "./components/Countries/Countries";
import Navbar from "./components/Navbar/Navbar";
import About from './components/About/About';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Socials from "./components/Socials/Socials";

class  App extends React.Component {
  constructor()
  {
    super();
    this.state = {
        latestTotals: '',
        all_countries: '',
        total_deaths: '',
        isFetching: true,
        motionStart: -180,
        motionFinish: 0,
        currentCountry: '',
        total_recovered: '',
        total_tests: ''

    }
  }

    componentDidMount = () => {
        this.fetchData();
        setInterval(this.fetchData, 900000);
        console.log('Home has been mounted!');
    }

    componentWillUnmount() {
      console.log('Home has been unmounted!')
    }

    selectedCountry = (selected) =>{
        this.setState({currentCountry: selected.target.parentNode.firstChild.innerHTML})
        const currentOne = this.state.currentCountry.toLowerCase();
        return currentOne;

    }
    fetchData = () => {
        fetch('http://localhost:3001')
            .then(res => res.json())
            .then(data => {
                this.setState({latestTotals: data.totalCases});
        })
        .catch(err => {
            console.log("There was an problem with connection.");
        });
        fetch('http://localhost:3001/countries')
            .then(res => res.json())
            .then(data => {
                this.setState({all_countries: data, total_deaths: data[7].totalDeaths, total_tests:data[7].totalTests ,total_recovered: data[7].totalRecovered, isFetching: false})
        })
        .catch(err => {
            console.log('There was an problem with the connection to the server!');
        })
    }

  render()
  {
    const totalData = () => {
        const dailyDate = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        if (!this.state.isFetching){
            return(
                <div>
                    
                    <div className='main-general'>
                        <div className='background'/>
                        <h1  className='main-header'>
                            WELCOME TO COVID TRACKER
                        </h1>
                        <h2 className='og-header'>
                            WORLD CORONAVIRUS TABLE
                        </h2>
                        <motion.div initial={{opacity: 0, scale: 0.8, y: -100}} animate={{opacity: 1, scale: 1, y: 0}} className='info-holder'>
                            <div className="firstrow">
                                <div className="total-test-div info-div">
                                    <h2 className="total-test-header info-h">Total Tests</h2>
                                    <p className="total-test-info info-p">{this.state.total_tests | 0}</p>
                                </div>
                                <div className='total-cases-div info-div'>
                                    <h2 className='total-cases-header info-h'>Total Cases</h2>
                                    <p className='total-cases-info info-p'>{this.state.latestTotals}</p>
                                </div>
                            </div>
                            <div className='date-container'>
                                <h3 className='date'>{dailyDate.getDate().toString()}</h3>
                                <h3 className='dateMonth'>{monthNames[dailyDate.getMonth()].toUpperCase()}</h3>
                                <h3 className='year'>{dailyDate.getFullYear().toString()}</h3>
                            </div>
                            <div className="secondrow">
                                <div className="total-recovered-div info-div">
                                    <h2 className="total-recovered-header info-h">Total Recovered</h2>
                                    <p className="total-recovered-info info-p">{this.state.total_recovered}</p>
                                </div>
                                <div className='total-death-div info-div'>
                                    <h2 className='total-death-header info-h'>Total Deaths </h2>
                                    <p  className='total-death-info info-p'>{this.state.total_deaths}</p>
                                </div>
                            </div>
                        </motion.div>
                        <footer>
                            <div>
                                Made by Oğuz Batur Sarıöz
                                <a target='_blank' href="https://github.com/oguzBatur"><i className="fab fa-github"/></a>
                            </div>
                        </footer>
                    </div>

                </div>
            )
        }
        else if(this.state.isFetching){
            return(
                <h1
                    className='loader'>Loading Data...
                </h1>
            )
        }
    }

      return (

      <div className="App">
          <Router>
            <Navbar countryData={this.state.all_countries} />
            <Switch>
                <Route exact path='/' component={totalData}/>
                <Route path='/about' component={About}/>
                <Route path='/countries'  render={() => <Countries selectedCountry={this.selectedCountry} countryData={this.state.all_countries}/>}/>
                <Route path='/socials' component={Socials}/>
            </Switch>
          </Router>

      </div>
    );
  }
  
}

export default App;
