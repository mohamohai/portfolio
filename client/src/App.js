import { Component } from 'react';
import  './mainCss/gnbContainer.css';
import React from 'react';
import GNB from './mainContents/GNB';
import UserAdd from './Components/UserAdd.js'
import DivClear from './mainContents/divClear'
import axios from 'axios';


class App extends Component{

  constructor(props) {
    super(props)
    this.state = {
      account : '',
      name : '',
      password : '',
      image : '',
      birthday : '',
      gender : '',
      job : ''
    }
  }

  _accountUpdate(e) {
    this.setState({ account : e.target.value })
  }
  _passwordUpdate(e) {
    this.setState({ password : e.target.value })
  }
  _nameUpdate(e) {
    this.setState({ name : e.target.value })
  }
  _imageUpdate(e) {
    this.setState({ image : e.target.value})
  }
  _birthUpdate(e) { 
    this.setState({ birthday : e.target.value})
  }
  _jobUpdate(e) {
    this.setState({ job : e.target.value})
  }
  _genderUpdate(e){
    this.setState({ gender : e.target.value})
  }

  _addData = async(e) => {
    const {account}  = this.state;
    const {password} = this.state;
    const {name}     = this.state;
    const {image}    = this.state;
    const {birthday} = this.state;
    const {gender}   = this.state;
    const {job}      = this.state;
    
    e.preventDefault();
     
    const data = {
                  account:account,
                  password:password,
                  name:name,   
                  image:image,
                  birthday:birthday,
                  gender:gender,
                  job:job
    };
    const res = await axios('/add/data', {
      method : 'POST',
      data :  data,
      headers: new Headers()
    })
    
    if(res.name) {
      alert('데이터를 추가했습니다.');
      return window.location.reload();
    }
  }
  
  render(){
    return(
      <div> 
        <GNB></GNB>
        <UserAdd></UserAdd>
        <form method='POST' onSubmit={this._addData}>
        <input type='text'  name="account"  maxLength='20' onChange={(e) => this._accountUpdate(e)}/>
        <input type='text'  name="pass"     maxLength='20' onChange={(e) => this._passwordUpdate(e)}/>
        <input type='text'  name="name"     maxLength='20' onChange={(e) => this._nameUpdate(e)} />
        <input type='text'  name="image"    maxLength='20' onChange={(e) => this._imageUpdate(e)} />
        <input type='text'  name="birthday" maxLength='20' onChange={(e) => this._birthUpdate(e)} />
        <input type='text'  name="job"      maxLength='20' onChange={(e) => this._jobUpdate(e)} />
        <input type='radio' name="gender"   value="남"     onChange={(e) => this._genderUpdate(e)} />
        <input type='radio' name="gender"   value="여"     onChange={(e) => this._genderUpdate(e)} />
        <input type='submit' value='Add' />
        </form>
         <div> asdsad</div>
      </div>
    );
  }
}  
export default App;
