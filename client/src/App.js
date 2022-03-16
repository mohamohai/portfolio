import { Component } from 'react';
import './mainCss/gnbContainer.css';
import React from 'react';
import GNB from './mainContents/GNB';
import DivClear from './mainContents/divClear'
import axios from 'axios';
import SignUp from './Components/SignUp';
import SelectUser from './Components/SelectUser';


class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name : '',
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

  render() {
    const { list } = this.state;

    return(
      <div className='App'>
        

        <br />
       

        <br /> <br />
          <div style={{ height : '250px', overflow : 'auto' }}>
            <h4 style={{ color : '#ababab'}}> Teachers List </h4>

              <div style={{ border : 'solid 1px black', width : '50%', marginLeft : '25%', textAlign : 'left' }}>
                <div style={{ display : 'grid', gridTemplateColumns : '32% 35% 30%', textAlign : 'center' }}>
                  <div> Number </div>
                  <div> Name </div>
                  <div> Other </div>
                </div>
              </div>

            {list.length !== 0
              ? list.map( (el, key) => {
                return(
                  <div key={key} style={{ display : 'grid', lineHeight : '40px', gridTemplateColumns : '32% 35%', width : '50%', marginLeft : '25%'}}>
                    <div> {el.id} </div>
                    <div> {el.name} </div>
                  </div>
                )
              })
            
              : null}
          </div>
      </div>
    )
  }
}

export default App;
