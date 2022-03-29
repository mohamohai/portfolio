import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
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
    const res = await axios.get('/get/Schedule');
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
        

        <br /> <br /><br></br>
          <div style={{ height : '250px', overflow : 'auto' }}>
            
            {list.length !== 0
              ? list.map( (info, key) => {
                return(
                  <div key={key} >
                    <div style={{ float : 'left'}}> {info.id}</div>
                    <div style={{ float : 'left'}}> {info.account}</div>
                    <div style={{ float : 'left'}}> {info.title}</div>
                    <div style={{ float : 'left'}}> {info.content}</div>
                    <div style={{ float : 'left'}}> {info.location}</div>
                    <div style={{ float : 'left'}}> {info.time}</div>
                    <div style={{ float : 'left'}}> {info.etc}</div>
                  </div>
                )
              })
            
              : '새로고침 눌러줭'}
          </div>
      </div>
    )
  }
}

export default App;