import { Component } from 'react';
import './mainCss/gnbContainer.css';
import React from 'react';
import GNB from './mainContents/GNB';
import UserAdd from './Components/UserAdd.js'
import DivClear from './mainContents/divClear'
import axios from 'axios';
import SignUp from './Components/SignUp'
import SelectUser from './Components/SelectUser';
import DeleteUser from './Components/DeleteUser';
import UpdateUser from './Components/UpdateUser';
class App extends Component{
 
    
  render(){
    return(

      
      <div> 
        <GNB></GNB>
        <SignUp></SignUp>
     
        <UpdateUser></UpdateUser>
       
      </div>
    );
  }
}  
export default App;
