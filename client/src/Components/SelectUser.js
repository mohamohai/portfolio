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
        

        <br /> <br /><br></br>
          <div style={{ height : '250px', overflow : 'auto' }}>
            

              

            {list.length !== 0
              ? list.map( (aa, key) => {
                return(
                  <div key={key} >
                    <div style={{ float : 'left'}}> {aa.id} </div>
                    <div style={{ float : 'left'}}> {aa.account}</div>
                    <div style={{ float : 'left'}}> {aa.password}</div>
                    <div style={{ float : 'left'}}> {aa.name}</div>
                    <div style={{ float : 'left'}}> {aa.image}</div>
                    <div style={{ float : 'left'}}> {aa.birthday}</div>
                    <div style={{ float : 'left'}}> {aa.gender}</div>
                    <div > {aa.job} </div>

                  </div>
                )
              })
            
              : 'a'}
          </div>
      </div>
    )
  }
}

export default App;