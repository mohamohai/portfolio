import { Component } from 'react';
import './mainCss/gnbContainer.css';
import React from 'react';
import GNB from './mainContents/GNB';
import UserAdd from './Components/UserAdd.js'
import DivClear from './mainContents/divClear'
import axios from 'axios';
import SignUp from './Components/SignUp';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      account  : '',
      list : [],
      update : false,
    }
  }
  componentDidMount() {
    this._addData();
  }
  _getData = async () => {
    const res = await axios.get('/get/data');
  }
  if(res.data[0] === undefined) {
    let cover = [];
    cover.push(res.data);

    return this.setState({ list : cover })
  }
  this.setState({ list : res.data });
}
  render(){
    return(

      
      <div> 
        <GNB></GNB>
        <SignUp></SignUp>
      </div>
    );
  }
}  
export default App;
