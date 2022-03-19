import { Component } from 'react';
import './mainCss/gnbContainer.css';
import React         from 'react';
import GNB           from './mainContents/GNB';
import UserAdd       from './Components/UserAdd.js'
import DivClear      from './mainContents/divClear'
import axios         from 'axios';
import SignUp        from './Components/SignUp'
import SelectUser    from './Components/SelectUser';
import DeleteUser    from './Components/DeleteUser';
import UpdateUser    from './Components/UpdateUser';
import SchedulePop   from './Components/SchedulePop';
import PopupDom from './PopupDom';




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

      
      <div> 
        <GNB></GNB>
        <h2>Open Popup</h2>
                <div>
                    <button type="button"
                            id="popupDom"
                            onClick={this.openPopup}
                    >
                        Click
                    </button>
                    {this.state.isOpenPopup &&
                        <PopupDom>
                            <SchedulePop onClose={this.closePopup}/>
                        </PopupDom>
                    }
                </div>
      </div>
    );
  }
}  
export default App;
