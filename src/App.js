import './App.css';
import React from 'react';
import {motion} from 'framer-motion';
import Countries from "./components/Countries/Countries";
import Navbar from "./components/Navbar/Navbar";
import About from './components/About/About';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


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
        currentCountry: ''

    }
  }

    componentDidMount = () => {
        this.fetchData();
        setInterval(this.fetchData, 900000);
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
                this.setState({all_countries: data, total_deaths: data[7].totalDeaths, isFetching: false})
        })
        .catch(err => {
            console.log('There was an problem with the connection to the server!');
        })
    }

  render()
  {
    const totalData = () => {
        if (!this.state.isFetching){
            return(
                <div>
                    
                    <div className='main-general'>
                        <div className='background'/>
                        <motion.h1 initial={{opacity: 0}} transition={{duration: '0.5', type:'tween'}}  animate={{fontSize: '50px', opacity: 1}} className='main-header'>
                            Welcome to Covid Tracker
                        </motion.h1>
                        <h1 className='place-holder'/>
                        <motion.div initial={{opacity: 0, y: '20px'}} animate={{opacity: 1, y: '0px'}} transition={{delay: '0.25', duration:'1'}} className='total-death-div'>
                            <h2 className='total-death-header'>Total Cases Worldwide </h2>
                            <motion.p  initial={{opacity: 0, y: '20px'}} animate={{opacity: 1, y: '0px'}} transition={{delay: '1', duration:'1'}} className='total-death-info'>{this.state.latestTotals}</motion.p>
                        </motion.div>
                        <motion.div initial={{opacity: 0, y: '20px'}} animate={{opacity: 1, y: '0px'}} transition={{delay: '1', duration:'1'}} className='total-death-div'>
                            <h2 className='total-death-header'>Total Deaths Worldwide </h2>
                            <motion.p  initial={{opacity: 0, y: '20px'}} animate={{opacity: 1, y: '0px'}} transition={{delay: '1', duration:'1'}} className='total-death-info'>{this.state.total_deaths}</motion.p>
                        </motion.div>
                        <footer>Made by Oğuz Batur Sarıöz
                            <i className="fab fa-github"/>
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
      console.log(4);

      return (

      <div className="App">
          <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={totalData}/>
                <Route path='/about' component={About}/>
                <Route path='/countries'  render={(props) => <Countries selectedCountry={this.selectedCountry} countryData={this.state.all_countries}/>}/>
            </Switch>
          </Router>

      </div>
    );
  }
  
}

export default App;
