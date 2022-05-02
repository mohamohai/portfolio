import { Component } from 'react';
import React from 'react';
import axios from 'axios';
import './SignIn.css';

import { BrowserRouter,Route, Link,Switch } from "react-router-dom";

class SignIn extends Component{
  
   
  constructor(props) {
    super(props)
    this.state = {
      list : [],
      update : false,
    }
  }

  componentDidMount() {
    this._getData();
  }

  _getData = async () => {
    const res = await axios.get('/get/data');

    if(res.data[0] === undefined) {
      let cover = [];
      cover.push(res.data);
      return this.setState({ list : cover })
    }
    this.setState({ list : res.data });
  }

   goId(){
      const accountInput = document.getElementsByName('account')[0].value;
      this.setState({
        account : accountInput
      });
      console.log('Id ' + accountInput);
      console.log(this.state.list[0].account);
   }

   goPw(){
    const passwordInput = document.getElementsByName('password')[0].value;
    this.setState({
      password : passwordInput
    });
    console.log('Pw ' + passwordInput);
 }
  golog(){
      for (let i =0;i<this.state.list.length;i++){
        console.log(this.state.list[i].account);
      }
    
  }
    
    render(){
      return(
        <div> <button onClick={() => this.golog()}>dd</button>
          <form method='POST' onSubmit={this._addData} className="SignInBox">
            <h2>Login</h2>
            <ul>
              <li><input type='text'      name="account"  maxLength='20' placeholder="ID"       className="idpa"  onChange={() => this.goId()}/></li><br></br> 
              <li><input type='password'  name="password" maxLength='20' placeholder="password" className="idpa"  onChange={() => this.goPw()}/></li><br></br>
              <li><input type='submit' value='Add' className='idpaBtn'/></li>              
              <li className='SignInBoxSignUp'><Link to ="SignUp">Create account</Link></li>
            </ul>
          </form>
        </div>
      );  
    }
  }  
  export default SignIn;
