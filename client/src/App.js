import { Component } from 'react';
import User from './Components/User.js';
import  './mainCss/gnbContainer.css';
import React from 'react';
import { CircularProgress } from '@material-ui/core';
import GNB from './mainContents/GNB';
import UserAdd from './Components/UserAdd.js'
import DivClear from './mainContents/divClear'


class App extends Component{

  state ={
    userArr: "",
    completed: 0
  }

  componentDidMount(){
    this.timer = setInterval(this.progress,20)
    this.callApi()
    .then(res => this.setState({userArr:res}))
     .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/userArr');
    const body = await response.json();
    return body;
  }
  progress = () =>{
    const {completed} = this.state;
    this.setState ({completed: completed >= 100 ? 0 : completed+1});
  }

  render(){
    return(
      <div> <GNB></GNB>
        <UserAdd></UserAdd>
          {
            this.state.userArr ? this.state.userArr.map(c =>{
              return(
                <User
                  key={c.id}
                  id ={c.id}
                  image={c.image}
                  name ={c.name}
                  birthday ={c.birthday}
                  gender ={c.gender}
                  job ={c.job}
               />
              )
            }): <CircularProgress variant ="determinate" value={this.state.completed}/>
          } 
         <div> asdsad</div>
      </div>
    );
  }
}


export default App;
