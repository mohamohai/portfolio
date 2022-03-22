import { Component } from 'react';
import './mainCss/gnbContainer.css';
import React, {useState}         from 'react';

import GNB           from './mainContents/GNB';
import UserAdd       from './Components/UserAdd.js';
import SelectUser    from './Components/SelectUser';
import DeleteUser    from './Components/DeleteUser';
import UpdateUser    from './Components/UpdateUser';
import SchedulePop   from './Components/SchedulePop';
import SignUp        from './Components/SignUp';

import DivClear      from './mainContents/divClear';
import axios         from 'axios';

import PopupDom from './PopupDom';
import { Calendar } from 'react-date-range';
import "react-date-range/dist/styles.css"; // main style file 
import 'react-date-range/dist/theme/default.css'; // theme css file  


import { BrowserRouter, Route } from 'react-router-dom';
import Home from './inc/home.js';
import Test from './inc/test.js';




class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isOpenPopup: false,
        }
        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }
    openPopup(){
        this.setState({
            isOpenPopup: true,
        })
    }
    closePopup(){
        this.setState({
            isOpenPopup: false,
        })
    }
    
  render(){
  
    return(
        <div className='MainCom'>
          <GNB></GNB>
        <BrowserRouter>
          <Route path="/" component={Home} />
          <Route path="/test" component={Test} />
        </BrowserRouter>
      </div>
    );
  }
}  
export default App;
