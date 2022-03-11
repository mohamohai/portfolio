import { Component } from 'react';
import User from './Components/User.js';
import React from 'react';
import { CircularProgress } from '@material-ui/core';

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
      <div>
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
            }): <table><CircularProgress variant ="determinate" value={this.state.completed}/></table>
          } 
      
      </div>
    );
  }
}


export default App;
