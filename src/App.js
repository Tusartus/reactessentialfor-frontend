import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// import './App.css';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import ActorsContainer from './components/actorsContainer';

import Actress from './components/actress';
import Films from './components/films';



class App extends Component {
    render(){
        return(
            <BrowserRouter> 
             <div className ="App">
            <Navbar title="News allst" />
            <Route exact path="/" render = {() => <Home title="oscars 2017-2018" />} />
            <Route  path="/actors" render = {() => <ActorsContainer title="actors pages" />} />
            <Route  path="/actress" render = {() => <Actress />} />
            <Route  path="/films" render = {() => <Films title="best film" />} />

           </div>
            </BrowserRouter>
          

        );
    }
}


export default App;